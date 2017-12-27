function ScoreBoard(data) {
}

ScoreBoard.prototype.updateScore = function() {
  this.score++;
};

ScoreBoard.prototype.printResponseTable = function(responseObjects) {
  var table = $('<table/>').appendTo(this.resultContainer);
  var headers = $('<td>S.no.</td>\
      <td>Question</td>\
      <td>Answer</td>\
      <td>Your Answer</td>');
  table.append(headers);
  $.each(responseObjects, function(){
    var row = $('<tr/>');
    for (var property in this) {
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
  this.resultContainer = $('[data-field=result]');
};

