function ScoreBoard(data) {
  this.resultContainer = data.resultContainer;
}

ScoreBoard.prototype.updateScore = function(increment) {
  if(increment) {
    this.score++;
  }
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
};

ScoreBoard.prototype.resultString = function() {
  return " Correct Answers: " + this.score;
};

ScoreBoard.prototype.displayResult = function(container) {
  container.text(this.resultString());
};

ScoreBoard.prototype.init = function() {
  this.score = 0;
};

