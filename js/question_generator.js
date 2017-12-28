function QuestionGenerator(questionField) {
  this.questionField = $(questionField);
}

QuestionGenerator.prototype.getRandomOperator = function() {
  return this.operators[Math.floor(Math.random() * this.operators.length)];
};

QuestionGenerator.prototype.createQuestion = function() {
  var numberOne = this.getRandomNumber(),
    numberTwo = this.getRandomNumber(),
    operator = this.getRandomOperator();
  var result = this.calculator.getResult(operator, numberOne, numberTwo);
  var question = new Question(this.number, operator, numberOne, numberTwo, result);
  this.displayQuestion(question);
  this.number++;
  return question;
};

QuestionGenerator.prototype.displayQuestion = function(question) {
  this.questionField.text(question.toString());
};

QuestionGenerator.prototype.checkAnswer = function(questionObject, userAnswer) {
  return questionObject.result == parseInt(userAnswer);
};

QuestionGenerator.prototype.getRandomNumber = function() {
  return Math.ceil(Math.random() * this.numbersForQuestion);
};

QuestionGenerator.prototype.init = function() {
  this.number = 0;
  this.noOfQuestions = 2;
  this.numbersForQuestion = 20;
  this.operators = ['+', '-', '/', '*'];
  this.calculator = new Calculator();
};