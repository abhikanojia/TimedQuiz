function ArithmeticQuiz(selector, timerOptions) {
  this.startButton = $(selector.startButton);
  this.quizForm = $(selector.quizForm);
  this.submitAnswerButton = $(selector.submitButton);
  this.answerField = $(selector.answerField);
  this.questionField = selector.questionField;
  this.resultContainer = selector.resultContainer;
  this.timerElement = $(selector.timerElement);
  this.timerOptions = timerOptions;
}

ArithmeticQuiz.prototype.startQuiz = function() {
  if(this.questionGenerator.number == this.questionGenerator.noOfQuestions) {
    this.submitAnswerButton.prop('disabled', true);
    this.timer.reset();
    this.quizForm.hide();
    this.scoreBoard.printResponseTable(this.questionStore);
  } else {
    this.timer.restart();
    this.submitAnswerButton.prop('disabled', false);
    this.questionStore.push(this.questionGenerator.createQuestion());
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
  var questionObject = this.questionStore[this.questionGenerator.number - 1];
  if(questionObject.checkAnswer(answer)) {
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
  this.questionGenerator.init();
  this.scoreBoard.init();
  this.timer.init(this.timerOptions);
};

ArithmeticQuiz.prototype.init = function() {
  this.calculator = new Calculator();
  this.scoreBoard = new ScoreBoard(this.resultContainer);
  this.timer = new CountDownTimer(this.timerElement, this.submitAnswerButton);
  this.questionGenerator = new QuestionGenerator(this.questionField);
  this.questionStore = [];
  this.addEventToFormSubmit();
  this.addEventToStartButton();
  this.initializeDependent();
};

$(document).ready(function(){
  var selector = {
    startButton: '[data-button=start]',
    quizForm: '[data-form=quiz]',
    answerField: '[data-field=answer]',
    submitButton: '[data-button=submit-answer]',
    questionField: '[data-field=question]',
    resultContainer: '[data-field=result]',
    timerElement: '[data-field=timer]'
  }
  var timerOptions = {
    end: 0,
    start: 10,
    timeInterval: 1000
  }
  var quiz = new ArithmeticQuiz(selector, timerOptions);
  quiz.init();
});
