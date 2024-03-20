class Calculator {
    add(num1: number, num2: number): number {
        return num1 + num2;
    }

    subtract(num1: number, num2: number): number {
        return num1 - num2;
    }

    multiply(num1: number, num2: number): number {
        return num1 * num2;
    }

    divide(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return num1 / num2;
    }
}

const calculator = new Calculator();

// Test the calculator
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
console.log("Division:", calculator.divide(6, 3));
