function ArithmeticQuiz(selector) {
  this.startButton = $(selector.startButton);
  this.quizForm = $(selector.quizForm);
  this.submitAnswerButton = $(selector.submitButton);
  this.answerField = $(selector.answerField);
}

ArithmeticQuiz.prototype.startQuiz = function() {
  if(this.question.number == this.question.noOfQuestions) {
    this.submitAnswerButton.prop('disabled', true);
    this.timer.reset();
    this.quizForm.hide();
    this.scoreBoard.printResponseTable(this.questionStore);
  } else {
    this.timer.restart();
    this.submitAnswerButton.prop('disabled', false);
    this.questionStore.push(this.question.displayQuestion());
  }
};

ArithmeticQuiz.prototype.addEventToStartButton = function() {
  var _this = this;
  this.startButton.on('click', function(){
    $(this).hide();
    _this.quizForm.show();
    _this.startQuiz();
  })
};

ArithmeticQuiz.prototype.addEventToFormSubmit = function() {
  var _this = this;
  this.quizForm.submit(function(event){
    event.preventDefault();
    var answer = _this.answerField.val().trim();
    _this.validateAnswer(answer);
    _this.answerField.val('');
    _this.startQuiz();
  });
};

ArithmeticQuiz.prototype.validateAnswer = function(answer) {
  var questionObject = this.questionStore[this.question.number - 1];
  if(this.question.checkAnswer(questionObject, answer)) {
    this.scoreBoard.updateScore();
  }
};

ArithmeticQuiz.prototype.displayResult = function() {
  var _this = this;
  this.quizForm.fadeOut(this.fadeOutTime, function() {
    _this.resultContainer.show();
    _this.scoreBoard.printResponseTable(_this.questions);
  });
};

ArithmeticQuiz.prototype.initializeDependent = function() {
  this.question.init();
  this.scoreBoard.init();
};

ArithmeticQuiz.prototype.init = function() {
  this.calculator = new Calculator();
  this.scoreBoard = new ScoreBoard();
  this.timer = new CountDownTimer();
  this.question = new Question();
  this.questionStore = [];
  this.addEventToFormSubmit();
  this.addEventToStartButton();
  this.initializeDependent()
};

$(document).ready(function(){
  var selector = {
    startButton: '[data-button=start]',
    quizForm: '[data-form=quiz]',
    answerField: '[data-field=answer]',
    submitButton: '[data-button=submitanswer]'
  }
  var quiz = new ArithmeticQuiz(selector);
  quiz.init();
});