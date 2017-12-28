function CountDownTimer(timerElement, submitButton) {
  this.timerElement = timerElement;
  this.submitButton = submitButton;
}

CountDownTimer.prototype.updateTime = function(value) {
  this.timerElement.text(value);
};

CountDownTimer.prototype.restart = function() {
  if(this.timerId) {
    clearInterval(this.timerId);
  }
  this.startTimer();
};

CountDownTimer.prototype.reset = function() {
  this.timerElement.text(this.end);
  clearInterval(this.timerId);
};

CountDownTimer.prototype.stop = function() {
  clearInterval(this.timerId);
};

CountDownTimer.prototype.startTimer = function() {
  var _this = this;
  var startFrom = this.start;
  this.timerId = setInterval(function(){
    if(startFrom == _this.end) {
      clearInterval(_this.timerId);
      _this.submitButton.trigger('click');
    }
    _this.updateTime(startFrom--);
  }, this.timeInterval);
};

CountDownTimer.prototype.init = function(timerOptions) {
  this.end = timerOptions.end;
  this.start = timerOptions.start;
  this.timeInterval = timerOptions.timeInterval;
};
