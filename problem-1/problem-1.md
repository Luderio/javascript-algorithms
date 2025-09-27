# Problem 1

- Write an algorithm that takes an array of numbers as an input and calculates the sum of those numbers.
- Define the Time Complexity of that algorithm and determine what the lowest possible time complexity is for this problem.

## Code

```javascript
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
```

## Big O Notation

- The lowest Big O Time Complexity for this problem is _O(n)_
- The array is not an arithmetic sequence hence no mathematical formulas can be used to further optimize the code.
- The code solution needs to loop through each item in the input array and add each item value to get the sum.
- Hence, in Big O Time Complexity, the number of operations will take longer as the number of array items increases.

### Big O Notation (Asymtotic Analysis)

Function Definition

- T = 1 + 1 + 1 + 1 + 1 + n or
- T = 5 + 1n or
- T = 5 + 1\*n

Fastest Growing Term

- 1\*n

Removal of coeficient

- n

Big O

- O(n) or Linear Time Complexity

go to **_problem-1.js_** file to see the full code
