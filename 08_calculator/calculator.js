const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((accu, value) => accu + value);
};

const multiply = function (nums) {
  return nums.reduce((accu, value) => accu * value);
};

const power = function (a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
};

const factorial = function (n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
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
