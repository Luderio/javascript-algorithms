/**
 * Memoization using javascript object
 * Memoization is used to optimize and speed up the fibonacci algorithm specifically in larger fibonacci sequence.
 * will add a new argument on the fib() function that is an object fib(n, memo = {}).
 * object keys will be the first argument of fib().
 * object value will be the return value.
 */

function fib(n, memo = {}) {
  // input type checking
  if (typeof n !== "number") {
    throw new Error("input must be a type of 'number'");
  }

  // checks if the input n is already added in the memo object.
  if (n in memo) return memo[n];

  if (n < 2) {
    return n;
  }

  // fibonacci formula: fib = fib(n - 1) + fib(n - 2) for n >= 2.
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
console.log(fib(100));
