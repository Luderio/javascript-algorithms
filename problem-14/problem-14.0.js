/**
 * CanSum Core Algorithm with Tablation.
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

  const table = Array(); // Visualize it as a table.
}

console.log(canSum(7, [5, 3, 4, 7])); // should return true;
