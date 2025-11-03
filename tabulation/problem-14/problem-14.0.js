/**
 * CanSum Core Algorithm with Tablation
 *
 *
 */

function canSum(targetSum, numbers) {
  // input type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument must be a type of 'String'.");
  }

  if (!Array.isArray(numbers)) {
    throw new Error("argument must be an array of numbers.");
  }

  const table = Array(targetSum + 1).fill(false); // Visualize it as a table
  table[0] = true;

  for (let item = 0; item <= targetSum; item++) {
    if (table[item] === true) {
      for (let number of numbers) {
        table[item + number] = true;
      }
    }
  }

  return table[targetSum];
}

/**
 * Big O Notation
 *
 * m = targetSum
 * n = numbers
 *
 * Time Complexity: O(mn)
 * Space Complexity: O(m)
 */

console.log(canSum(7, [5, 3, 4, 7])); // should return true.
