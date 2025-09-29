function fib(n) {
  // input type checking
  if (typeof n !== "number") {
    throw new Error("input must be a type of 'number'");
  }

  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fibonacci = fib(0);
console.log(fibonacci);
