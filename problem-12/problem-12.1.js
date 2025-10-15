/**
 * Core Iterative Algorithm with Tabulation.
 * Optimized
 * Big O Time Complexity: O(n)
 * Big O Space Complexity: O(1)
 */

function fibonacci(number) {
  // input type checking.
  if (typeof number !== "number") {
    throw new Error("argument must be a type of 'string'");
  }

  if (number === 0) return 0;
  if (number === 1) return 1;

  let previous = 0;
  let current = 1;

  for (let index = 2; index <= number; index++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

/**
 * n = number
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

console.log(fibonacci(6)); // must return 8.
console.log(fibonacci(7)); // must return 13.
console.log(fibonacci(8)); // must return 21.
console.log(fibonacci(9)); // must return 34.
console.log(fibonacci(10)); // must return 55.
console.log(fibonacci(50)); // must return 12586269025, will be slow.
console.log(fibonacci(100)); // must return 354224848179262000000, will be slow.
