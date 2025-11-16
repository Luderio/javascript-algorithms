/**
 * howSum() Core algorithm implementation using Tabulation....
 */

function howSum(targetSum, numbers) {
  // input type checking..
  if (typeof targetSum !== "number") {
    throw new Error("argument must be a type of 'String'.");
  }

  if (!Array.isArray(numbers)) {
    throw new Error("argument must be an array of numbers.");
  }

  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let item = 0; item <= targetSum; item++) {
    if (table[item] === null) {
      for (let num = 0; num <= numbers.length; num++) {
        if (
          numbers[num] * targetSum === targetSum ||
          targetSum % numbers[num] === 0
        ) {
          table[item + numbers[num]] = Array(targetSum / numbers[num]).fill(
            numbers[num]
          );
        } else if (numbers[num] * 2 === targetSum) {
          table[item + numbers[num]] = Array(targetSum / 2).fill(numbers[num]);
        } else if (numbers[num] + numbers[num + 1] === targetSum) {
          table[item + numbers[num]] = Array(targetSum / 2).fill(numbers[num]);
        }
      }
    }
  }
  return table[targetSum];
}

/**
 * Big O Notation..
 *
 * m = targetSum..
 * n = numbers..
 * Time Complexity:
 * Space Complexity:
 */

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null.
console.log(howSum(0, [1, 2, 3])); // []
