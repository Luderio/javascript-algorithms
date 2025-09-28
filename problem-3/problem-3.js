const isArithmetic = (array) => {
  if (!Array.isArray(array) || array.length < 2) return false;

  let difference = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== difference) return false;
  }
  return true;
};

// /**
//  * this version has a Big o Notation: O(1 + n + 1 + n + 1) or O(3 + 2n) or O(n) / Linear Time Complexity.
//  */
// const sumOfArithmetic = (numbers) => {
//   // checking the input type. Will execute 1 time.
//   if (!Array.isArray(numbers)) {
//     throw new Error("Input type must be a type of 'Array'");
//   }
//   // check if the input array follows an arithmetic pattern. Will execute n times (depending on the length of the input: numbers) + 1.
//   if (!isArithmetic(numbers)) {
//     throw new Error("Input must be an arithmetic array");
//   }

//   let sum = 0; // Will execute 1 time.

//   // Will execute n times (depending on the length of the input: numbers).
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum; // Will execute 1 time.
// };

//============================================================

// /**
//  * this version of the code has a Big O Notation: O(1 + n + 1 + 1 + 1 + 1 + 1) or O(6 + 1n) or O(n) / Linear Time Complexity.
//  */
// const sumOfArithmetic = (numbers) => {
//   // checking the input type Will execute 1 time.
//   if (!Array.isArray(numbers)) {
//     throw new Error("Input type must be a type of 'Array'");
//   }
//   // check if the input array follows an arithmetic pattern. Will execute n times (depending on the length of the input: numbers) + 1.
//   if (!isArithmetic(numbers)) {
//     throw new Error("Input must be an arithmetic array");
//   }

//   // will use the mathematical formula: sum = (n / 2) * (first + last) on getting the sum of the arithmetic sequence.
//   const n = numbers.length; // Will execute 1 time.
//   const first = numbers[0]; // Will execute 1 time.
//   const last = numbers[n - 1]; // Will execute 1 time.

//   // returns the result of the formula
//   const sum = (n / 2) * (first + last); // Will execute 1 time.
//   return sum; // Will execute 1 time.
// };

//============================================================

/**
 * isArithmetic() check is removed.
 * this version of the code has a Big O Notation: O(1 + 1 + 1 + 1 + 1 + 1) or O(6) or O(1) / Constant Time Complexity.
 * No matter how long the numbers array is, the function will execute only 6 operations.
 */

const sumOfArithmetic = (numbers) => {
  // checking the input type Will execute 1 time.
  if (!Array.isArray(numbers)) {
    throw new Error("Input type must be a type of 'Array'");
  }

  // will use the mathematical formula: sum = (n / 2) * (first + last) on getting the sum of the arithmetic sequence.
  const n = numbers.length; // Will execute 1 time.
  const first = numbers[0]; // Will execute 1 time.
  const last = numbers[n - 1]; // Will execute 1 time.

  // returns the result of the formula
  const sum = (n / 2) * (first + last); // Will execute 1 time.
  return sum; // Will execute 1 time.
};

const numbers = [2, 7, 12, 17, 22, 27, 32, 37, 42];
const sum = sumOfArithmetic(numbers);
console.log(sum);
