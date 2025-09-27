function sumOfNumbers(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input type is not a type of 'Array'");
  }

  let sum = 0;
  for (let number = 0; number < array.length; number++) {
    sum = sum + array[number];
  }
  return sum;
}

const array = [2, 5, 10, 23, 1, 8];
const sum = sumOfNumbers(array);
console.log(sum);

/**
 * Big O Notation (Asymtotic Analysis)
 *
 * Function Definition
 * T = 1 + 1 + 1 + 1 + 1 + n or
 * T = 5 + 1n or
 * T = 5 + 1*n
 *
 * Fastest Growing Term
 * 1*n
 *
 * Removal of coeficient
 * n
 *
 * Big O
 * O(n) or Linear Time Complexity
 */
