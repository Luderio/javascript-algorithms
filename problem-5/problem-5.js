/**
 * Core Algorithm with Memoization logic. (Optimized Version).
 * Adds a new argument with default value: memo = {} which is an object.
 * Every result gets added to the memo object and the memo value is being passed down by reference to the recursive calls to act as a cache of the result.
 * At every iteration, the algorithm will check if the key,value pair is already present in the object. if yes, the stored result is used immediately cuttting down on execution time.
 *
 */

function gridTraveler(m, n, memo = {}) {
  // input type check
  if (typeof m !== "number" && typeof n !== "number") {
    throw new Error("input must be a type of 'Number'");
  }

  const key = `${m},${n}`;
  if (key in memo) return memo[key];

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[key];
}

console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(4, 4)); // 20
console.log(gridTraveler(6, 6)); // 252
console.log(gridTraveler(10, 10)); // 48620
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000.
