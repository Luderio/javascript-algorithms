import isArithmetic from "../problem-2/problem-2"; // imported isArithmetic() function from previous code challenge

const sumOfArithmetic = (numbers) => {
  // checking the input type
  if (!Array.isArray(numbers)) {
    throw new Error("Input type must be a type of 'Array'");
  }
  // check if the input array follows an arithmetic pattern
  if (!isArithmetic(numbers)) {
    throw new Error("Input must be an arithmetic array");
  }
};

const numbers = [2, 7, 12, 17, 22, 27, 32, 37, 42];
const sum = sumOfArithmetic(numbers);
console.log(sum);
