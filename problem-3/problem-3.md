# Problem 3

- Write an algorithm that takes an array of arithmetic numbers and calculates the sum of those numbers.
- The algorithm must check if the array of number follows an airthmetic pattern.
- Define the Time Complexity of tha algorithm and determine what the lowest possible time complexity is for this problem.

## Code

### Version 1:

```javascript
/**
 * this version has a Big o Notation: O(1 + n + 1 + n + 1) or O(3 + 2n) or O(n) / Linear Time Complexity.
 */

const isArithmetic = (array) => {
  if (!Array.isArray(array) || array.length < 2) return false;

  let difference = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== difference) return false;
  }
  return true;
};

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
```

### Version 2:

```javascript
/**
 * this version of the code has a Big O Notation: O(1 + n + 1 + 1 + 1 + 1 + 1) or O(6 + 1n) or O(n) / Linear Time Complexity.
 */

const isArithmetic = (array) => {
  if (!Array.isArray(array) || array.length < 2) return false;

  let difference = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== difference) return false;
  }
  return true;
};

const sumOfArithmetic = (numbers) => {
  // checking the input type Will execute 1 time.
  if (!Array.isArray(numbers)) {
    throw new Error("Input type must be a type of 'Array'");
  }
  // check if the input array follows an arithmetic pattern. Will execute n times (depending on the length of the input: numbers) + 1.
  if (!isArithmetic(numbers)) {
    throw new Error("Input must be an arithmetic array");
  }

  // will use the mathematical formula: sum = (n / 2) * (first + last) on getting the sum of the arithmetic sequence.
  const n = numbers.length; // Will execute 1 time.
  const first = numbers[0]; // Will execute 1 time.
  const last = numbers[n - 1]; // Will execute 1 time.

  // returns the result of the formula
  const sum = (n / 2) * (first + last); // Will execute 1 time.
  return sum; // Will execute 1 time.
};
```

### Version 3:

```javascript
/**
 * this version of the code has a Big O Notation: O(1 + 1 + 1 + 1 + 1 + 1) or O(6) or O(1) / Constant Time Complexity.
 * isArithmetic() check is removed.
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
```

## Big O Notation

- Out of the 3 versions of code, the best algorithm with respect for Big O Time Complexity is: **Version 3**
- However, if you will take _edge cases_ or _better error handling_ into account, both Versions (**Version 1** and **Version 2**) is the best version to use.

---

go to **[problem-3.js](https://github.com/Luderio/javascript-algorithms/blob/main/problem-3/problem-3.js)** file to see the full code.
