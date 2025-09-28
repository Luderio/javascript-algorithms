const isArithmetic = (array) => {
  if (!Array.isArray(array) || array.length < 2) return false; // Executes 1 time

  // calculates the difference for later comparisons.
  let difference = array[1] - array[0]; // Executes 1 time

  for (let i = 2; i < array.length; i++) {
    // Executes n times depending on the length of the array.
    if (array[i] - array[i - 1] !== difference) return false;
  }
  return true; // Executes 1 time
};

export default isArithmetic;

const numbers = [2, 7, 12, 17, 22, 27, 32, 37, 42];
const arithmetic = isArithmetic(numbers);
console.log(arithmetic);
