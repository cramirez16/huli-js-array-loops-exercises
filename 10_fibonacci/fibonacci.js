const fibonacci = function (n) {
  if (typeof n === "string") {
    n = Number(n);
  }
  if (n < 0) return "OOPS";
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
  /*
  fib(6) = fib(5) + fib(4) 
  fib(5) = fib(4) + fib(3)
  fib(4) = fib(3) + fib(2)
  fib(3) = fib(2) + fib(1)
  fib(2) = 1
  fib(1) = 1
  */
};

// Do not edit below this line
module.exports = fibonacci;
