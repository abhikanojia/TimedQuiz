function ScoreBoard(resultContainer) {
  this.resultContainer = $(resultContainer);
}

ScoreBoard.prototype.updateScore = function() {
  this.score++;
};

ScoreBoard.prototype.printResponseTable = function(responseObjects) {
  var _this = this;
  var table = $('<table/>').appendTo(this.resultContainer);
  var headers = $('<td>S.no.</td>\
      <td>Number One</td>\
      <td>Number Two</td>\
      <td>Operator</td>\
      <td>Answer</td>');
  table.append(headers);
  $.each(responseObjects, function(){
    var row = $('<tr/>');
    for (var property of Object.keys(this)) {
      var td = $('<td/>',{
        text: this[property]
      });
      row.append(td);
    }
    row.appendTo(table);
  });
  this.resultContainer.show();
  this.resultContainer.append(this.resultString());
};

ScoreBoard.prototype.resultString = function() {
  return " Correct Answers: " + this.score;
};

ScoreBoard.prototype.init = function() {
  this.score = 0;
};

