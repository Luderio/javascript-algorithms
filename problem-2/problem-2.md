# Problem 2

- Write an algorithm that takes an array of numbers and checks of the array of numbers follows an Arithmetic pattern.
- Define the Time Complexity of tha algorithm and determin what the lowest possible time complexity is for this problem.

## Code

```javascript
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

const numbers = [2, 7, 12, 17, 22, 27, 32, 37, 42];
const arithmetic = isArithmetic(numbers);
console.log(arithmetic);
```

## Big O Notation

- The lowest Big O Time Complexity for this problem is _O(n)_ or Linear Complexity.
- The Algorithm has to loop through the items comparing the difference of two items to see if each consecutive items is _n_ time greater than the previous one.

### Big O Notation (Asymtotic Analysis)

#### Function Definition

- T = 1 + 1 + n + 1 or
- T = 3 + 1n or
- T = 3 + 1\*n

#### Finding the fastest growing term

- T = 3 + (**1\*n**)
- Fastest growing term: **1\*n**

#### Remove the coeficient

- T = **3** + (**1\*n**)
- T = **n**

#### Big O

- **O(n)** or Linear Complexity

---

go to **[problem-2.js](https://github.com/Luderio/javascript-algorithms/blob/main/problem-2/problem-2.js)** file to see the full code.
