function CountDownTimer() {
}

CountDownTimer.prototype.updateTime = function(value) {
  this.timerElement.text(value);
};

CountDownTimer.prototype.restart = function() {
  if(this.timerId) {
    clearInterval(this.timerId);
  }
  this.init();
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

CountDownTimer.prototype.init = function() {
  this.end = 0;
  this.start = 10;
  this.timerElement = $('[data-field=timer]');
  this.submitButton = $('[data-button=submitanswer]');
  this.timeInterval = 1000;
  this.startTimer();
};