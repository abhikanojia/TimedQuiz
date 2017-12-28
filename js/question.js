function Question(questionNumber, operator, numberOne, numberTwo, result) {
  this.questionNumber = questionNumber;
  this.numberOne = numberOne;
  this.numberTwo = numberTwo;
  this.operator = operator;
  this.result  = result;
}

Question.prototype.toString = function() {
  return this.numberOne.toString().concat(" ", this.operator, " ", this.numberTwo.toString());
};

Question.prototype.checkAnswer = function(userAnswer) {
  return this.result == parseInt(userAnswer);
};
