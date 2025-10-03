// classic fibonacci implementation (Zero-based)

function fib(n) {
  if (n < 2) {
    return n;
  }

  // fibonacci formula: fib = fib(n - 1) + fib(n - 2) for n >= 2.
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // 8, fast
console.log(fib(7)); // 13, fast
console.log(fib(8)); // 21, fast
console.log(fib(50)); // 12586269025, will be slow
console.log(fib(100)); // 354224848179262000000, will be slow
