const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((acc, item) => acc + item, 0);
};

const multiply = function (array) {
  return array.reduce((acc, item) => acc * item);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
