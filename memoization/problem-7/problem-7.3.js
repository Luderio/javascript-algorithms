/**
 * Core Algorithm with Memoization
 * Big O Time Complexity: O(m * n) or Linear Time Complexity
 * Big O Space Complexity: O(m) or Linear Time Complexity
 */

function howSum(targetSum, numbers, memo = {}) {
  // inout type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument should be a type of 'number'.");
  }

  if (!Array.isArray(numbers) || numbers === undefined) {
    throw new Error("argument must be an array of numbers.");
  }

  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    let remaining = targetSum - number;
    let remainder = howSum(remaining, numbers, memo);
    if (remainder !== null) {
      memo[targetSum] = [...remainder, number];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null
console.log(howSum(7, [3, 4])); // should return [3, 4]
console.log(howSum(0, [1, 2, 3])); // []
console.log(howSum(300, [1, 2, 3])); // [1, 1, 1, 1, 1, 1, 1, ... 293 more items]
