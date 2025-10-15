/**
 * Core Iterative Algorithm with Tabulation.
 * Unoptimized
 * Big O Time Complexity: O(n)
 * Big O Space Complexity: O(n)
 */

function fibonacci(number) {
  // input type checking.
  if (typeof number !== "number") {
    throw new Error("argument must be a type of 'string'");
  }

  const table = Array(number + 1).fill(0);
  table[1] = 1;

  for (let index = 0; index <= number; index++) {
    table[index + 1] += table[index];
    table[index + 2] += table[index];
  }

  return table[number];
}

/**
 * n = number
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

console.log(fibonacci(6)); // must return 8.
console.log(fibonacci(7)); // must return 13.
console.log(fibonacci(8)); // must return 21.
console.log(fibonacci(9)); // must return 34.
console.log(fibonacci(10)); // must return 55.
console.log(fibonacci(50)); // must return 12586269025
console.log(fibonacci(100)); // must return 354224848179262000000.
