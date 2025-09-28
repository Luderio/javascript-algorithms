const isArithmetic = (array) => {
  if (!Array.isArray(array) || array.length < 2) return false;

  let difference = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== difference) return false;
  }
  return true;
};

const sumOfArithmetic = (numbers) => {
  // checking the input type
  if (!Array.isArray(numbers)) {
    throw new Error("Input type must be a type of 'Array'");
  }
  // check if the input array follows an arithmetic pattern
  if (!isArithmetic(numbers)) {
    throw new Error("Input must be an arithmetic array");
  }

  // will use the mathematical formula: sum = (n / 2) * (first + last) on getting the sum of the arithmetic sequence.
  const n = numbers.length;
  const first = numbers[0];
  const last = numbers[n - 1];

  // returns the result of the formula
  const sum = (n / 2) * (first + last);
  return sum;
};

const numbers = [2, 7, 12, 17, 22, 27, 32, 37, 42];
const sum = sumOfArithmetic(numbers);
console.log(sum);
