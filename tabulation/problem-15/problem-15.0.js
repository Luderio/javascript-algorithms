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

  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let item = 0; item <= targetSum; item++) {
    if (table[item] === null) {
      for (let number of numbers) {
        if (number * targetSum === targetSum || targetSum % number === 0) {
          table[item + number] = Array(targetSum / number).fill(number);
        } else if (number * 2 === targetSum) {
          table[item + number] = Array(targetSum / 2).fill(number);
        }
      }
    }
  }
  return table[targetSum];
}

/**
 * Big O Notation.
 *
 * m = targetSum
 * n = numbers
 * Time Complexity:
 * Space Complexity:
 */

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null
console.log(howSum(0, [1, 2, 3])); // []
