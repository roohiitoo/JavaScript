//Write a function called calculator that takes in 2 numbers and an operator and returns the result of the calculation.
/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */

function calculator(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else if (operator == "%") {
    return num1 % num2;
  } else {
    throw new Error("Invalid Operator");
    //return "Invalid Operator";
  }
}

// console.log(calculator(12, 9, "0"));

function optimizeCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      //throw new Error("Invalid Operator");
      return "Invalid Operator";
  }
}

console.log(optimizeCalculator(21, 9, "+"));
