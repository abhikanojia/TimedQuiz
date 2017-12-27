function CountDownTimer(data) {
  this.end = data.end;
  this.start = data.start;
  this.timerElement = data.timerElement;
  this.submitButton = data.submitButton;
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
  this.timerElement.text("0");
  clearInterval(this.timerId);
};

CountDownTimer.prototype.stop = function() {
  clearInterval(this.timerId);
};

CountDownTimer.prototype.init = function() {
  var _this = this;
  var startFrom = this.start;
  this.timerId = setInterval(function(){
    if(startFrom == _this.end) {
      clearInterval(_this.timerId);
      _this.submitButton.trigger('click');
    }
    _this.updateTime(startFrom--);
  }, 1000);
};


// var timerOptions = {
//     end: 0,
//     start: 10,
//     timerElement: $('[data-field=timer]')
//   };

// var timer = new CountDownTimer(timerOptions);
// console.log(timer);