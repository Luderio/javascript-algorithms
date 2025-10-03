/**
 * Core Algorithm without Memoization.
 *
 */

function canSum(targetSum, numbers) {
  // input type checking.

  if (typeof targetSum !== "number" || targetSum < 0) {
    throw new Error(
      "argument 'targetSum' must be a type of 'Number' and a non-negative number."
    );
  }

  if (!Array.isArray(numbers)) {
    throw new Error(
      "argument numbers[] must be an array of non-negative numbers."
    );
  }
}

const numbers = [5, 3, 4, 7];
const targetSum = 7;
console.log(canSum(targetSum, numbers));
