/**
 * Core Algorithm without Memoization.
 * Big O Time Complexity: O(n^m)
 * Big O Space Complexity: O(m)
 */

function canSum(targetSum, numbers) {
  // input type checking.

  if (typeof targetSum !== "number") {
    throw new Error(
      "argument 'targetSum' must be a type of 'Number' and a non-negative number."
    );
  }

  if (!Array.isArray(numbers)) {
    throw new Error(
      "argument 'numbers' must be an array of non-negative numbers."
    );
  }

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const difference = targetSum - num;
    if (canSum(difference, numbers, memo) === true) {
      return true;
    }
  }
  return false;
}

console.log(canSum(7, [2, 3])); // fast
console.log(canSum(7, [7, 3, 4, 7])); // fast
console.log(canSum(7, [2, 4])); // fast
console.log(canSum(8, [2, 3, 5])); // fast
console.log(canSum(300, [7, 14])); // slow
