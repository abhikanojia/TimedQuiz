function Calculator() {
}

Calculator.prototype.getResult = function(operator, numberOne, numberTwo) {
  switch(operator) {
    case "+":
      return this.add(numberOne, numberTwo);
    case "-":
      return this.subtract(numberOne, numberTwo);
    case "*":
      return this.multiply(numberOne, numberTwo);
    case "/":
      return this.divide(numberOne, numberTwo);
  }
};

Calculator.prototype.add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

Calculator.prototype.subtract = function(numberOne, numberTwo) {
  return numberOne - numberTwo;
};

Calculator.prototype.divide = function(numberOne, numberTwo) {
  return Math.floor(numberOne / numberTwo);
};

Calculator.prototype.multiply = function(numberOne, numberTwo) {
  return Math.floor(numberOne * numberTwo);
};