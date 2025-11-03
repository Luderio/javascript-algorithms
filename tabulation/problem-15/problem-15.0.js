/**
 * howSum() Core algorithm implementation using Tabulation
 */

function howSum(targetSum, numbers) {
  // input type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument must be a type of 'String'.");
  }

  if (!Array.isArray(numbers)) {
    throw new Error("argument must be an array of numbers.");
  }
}

/**
 * Big O Notation
 *
 * m = targetSum
 * n = numbers
 * Time Complexity:
 * Space Complexity:
 */

howSum(7, [5, 3, 4, 7]); // should return  [3, 4] or [7]
howSum(8, [2, 3, 5]); // should return [2, 2, 2, 2]  or [3, 5]
howSum(7, [2, 4]); // should return null
howSum(0, [1, 2, 3]); // []
