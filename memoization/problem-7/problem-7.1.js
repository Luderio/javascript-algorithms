/**
 * Core Algorithm with Optimization
 * This version removes the while loop from the previous version improving the Time Complexity
 * Big O Time Complexity: O(m * n) or Linear Time Complexity
 * Big O Space Complexity: O(n + m) or Linear Space Complexity.
 */

function howSum(targetSum, numbers) {
  // inout type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument should be a type of 'number'.");
  }

  if (!Array.isArray(numbers) || numbers === undefined) {
    throw new Error("argument must be an array of numbers.");
  }

  const current = numbers.shift();
  const next = numbers[0];

  if (targetSum === 0) return [];
  if (numbers.length === 0 || targetSum < 0) return null;
  if (current === targetSum) return current;
  if (current + next === targetSum) return [current, next];
  if (targetSum % current === 0) {
    return new Array(targetSum).fill(current);
  }

  return howSum(targetSum, numbers);
}

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null
console.log(howSum(7, [3, 4])); // should return [3, 4]
console.log(howSum(0, [1, 2, 3])); // []
console.log(howSum(300, [1, 2, 3])); // [1, 1, 1, 1, 1, 1, 1, ... 293 more items]
