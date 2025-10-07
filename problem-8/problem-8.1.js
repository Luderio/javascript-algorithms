/**
 * Core Algorithm with Memoization
 * Time Complexity: O(m^2 * n)
 * Space Complexity: O(m * m) or O(m^2)
 */

function bestSum(targetSum, numbers, memo = {}) {
  if (typeof targetSum !== "number") {
    throw new Error("argument must be a type of 'number'");
  }

  if (!Array.isArray(numbers)) {
    throw new Error("argument must be an array of numbers");
  }

  let combinations = null;

  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    let remainder = targetSum - number;
    let result = bestSum(remainder, numbers, memo);
    if (result !== null) {
      const combination = [...result, number];
      if (combinations === null) combinations = combination;
      if (combinations !== null && combination.length < combinations.length) {
        combinations = combination;
      }
    }
  }

  memo[targetSum] = combinations;
  return combinations;
}

/**
 * Big O Notation
 * m = targetSum
 * n = numbers
 *
 * Time Complexity: O(m^2 * n) or Polynomial Time Complexity
 * Space Complexity: O(m * m) or O(m^2) or Polynomial Space Complexity
 */

console.log(bestSum(7, [5, 3, 4, 7])); // should return [7]
console.log(bestSum(8, [2, 3, 5])); // should return [3, 5]
console.log(bestSum(8, [1, 4, 5])); // should return [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // should return [4, 4]
