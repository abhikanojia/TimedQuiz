function Question() {
}

Question.prototype.generate = function() {
  var numberOne = this.getRandomNumber(),
    numberTwo = this.getRandomNumber(),
    operator = this.operators[Math.floor(Math.random() * this.operators.length)],
    question = numberOne.toString().concat(" ", operator, " ", numberTwo.toString()),
    result = this.calculator.getResult(operator, numberOne, numberTwo);
    this.questionObject = this.createQuestionObject(question, result);
    this.number++;
    return question;
};

Question.prototype.checkAnswer = function(questionObject, userAnswer) {
  questionObject.usersAnswer = userAnswer;
  return questionObject.correctAnswer == parseInt(userAnswer);
};

Question.prototype.displayQuestion = function() {
  var question = this.generate();
  this.questionField.text(question);
  return this.questionObject;
};

Question.prototype.createQuestionObject = function(questionString, result) {
  return {
    number: this.number,
    questionString: questionString,
    correctAnswer: result,
    usersAnswer: null
  };
};

Question.prototype.getRandomNumber = function() {
  return Math.ceil(Math.random() * this.numbersForQuestion);
};

Question.prototype.init = function() {
  this.number = 0;
  this.noOfQuestions = 2;
  this.numbersForQuestion = 20;
  this.operators = ['+', '-', '/', '*'];
  this.questionField = $('[data-field=question]');
  this.calculator = new Calculator();
};