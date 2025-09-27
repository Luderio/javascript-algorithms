function sumOfNumbers(array) {
  // input type checking
  if (!Array.isArray(array)) {
    throw new Error("Input type is not a type of Array");
  }
}

const array = [2, 5, 10, 23, 1, 8];
const sum = sumOfNumbers(array);
console.log(sum);
