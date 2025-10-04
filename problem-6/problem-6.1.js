function canSum(targetSum, numbers) {
  // input type checking.

  if (typeof targetSum !== "number" || targetSum < 0) {
    throw new Error(
      "argument 'targetSum' must be a type of 'Number' and a non-negative number."
    );
  }

  if (!Array.isArray(numbers)) {
    throw new Error(
      "argument 'numbers' must be an array of non-negative numbers."
    );
  }

  if (numbers.length === 0 || numbers === undefined) return false;

  let current = numbers.shift();
  let next = numbers[0];

  if (current === targetSum) return true;
  if (current + next === targetSum) return true;
  if (current * targetSum === targetSum) return true;
  if (targetSum % current === 0) return true;

  let sum = 0;
  while (sum < targetSum) {
    console.log([sum, current]);

    sum += current;
  }
  if (sum === targetSum) return true;

  return canSum(targetSum, numbers);
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [7, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [10, 14]));
