var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtract = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.divide = function (num1, num2) {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return num1 / num2;
    };
    return Calculator;
}());
var calculator = new Calculator();
// Test the calculator
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
console.log("Division:", calculator.divide(6, 3));
