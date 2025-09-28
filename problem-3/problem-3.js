const isArithmetic = (array) => {
  if (!Array.isArray(array) || array.length < 2) return false;

  let difference = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== difference) return false;
  }
  return true;
};

// const sumOfArithmetic = (numbers) => {
//   // checking the input type
//   if (!Array.isArray(numbers)) {
//     throw new Error("Input type must be a type of 'Array'");
//   }
//   // check if the input array follows an arithmetic pattern
//   if (!isArithmetic(numbers)) {
//     throw new Error("Input must be an arithmetic array");
//   }

//   // will use the mathematical formula: sum = (n / 2) * (first + last) on getting the sum of the arithmetic sequence.
//   const n = numbers.length;
//   const first = numbers[0];
//   const last = numbers[n - 1];

//   // returns the result of the formula
//   const sum = (n / 2) * (first + last);
//   return sum;
// };

// this verssion has a Big o Notation: O(3 + 1n + 1n) or O(2n) or O(n) / Linear Time Complexity.
const sumOfArithmetic = (numbers) => {
  // checking the input type. Will execute 1 time.
  if (!Array.isArray(numbers)) {
    throw new Error("Input type must be a type of 'Array'");
  }
  // check if the input array follows an arithmetic pattern. Will execute n times (depending on the length of the input: numbers) + 1.
  if (!isArithmetic(numbers)) {
    throw new Error("Input must be an arithmetic array");
  }

  let sum = 0; // Will execute 1 time.

  // Will execute n times (depending on the length of the input: numbers).
  for (let number of numbers) {
    sum += number;
  }
  return sum; // Will execute 1 time.
};

const numbers = [2, 7, 12, 17, 22, 27, 32, 37, 42];
const sum = sumOfArithmetic(numbers);
console.log(sum);
