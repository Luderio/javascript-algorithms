const isArithmetic = (array) => {
  if (!Array.isArray(array) || array.length < 2) return false;

  // calculates the difference for later comparisons.
  let difference = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== difference) return false;
    return true;
  }
};

const numbers = [2, 7, 12, 17, 22, 27, 32, 37, 42];
const arithmetic = isArithmetic(numbers);
console.log(arithmetic);
