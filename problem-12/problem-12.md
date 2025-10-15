# Problem 12: Solve Fibonacci Sequence using Tabulation

- Write a function _fib(n)_ that takes in a number as an argument.
- The function should return the _n-th_ number of the Fibonacci sequence.
- Make sure that the algorithm is optimized to handle larger fibonacci sequences.

---

**Fibonacci Sequence:**

- The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

**Examples:**

The first few Fibonacci numbers are:

```javascript
// zero-based fibonacci sequence.

n = 0, 1, 2, 3, 4, 5, 6, 7,  8,  9, ...
f = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

**_fibonacci(7)_** should return **_13_** because the fibonacci number at position 7 is 13 from the above example.

## Code Solutions

### Solution 1: Core Iterative Algorithm with Tabulation.

- Big O Time Complexity: O(n)
- Big O Space Complexity: O(n)

```javascript
function fibonacci(number) {
  // input type checking.
  if (typeof number !== "number") {
    throw new Error("argument must be a type of 'string'");
  }

  const table = Array(number + 1).fill(0);
  table[1] = 1;

  for (let index = 0; index <= number; index++) {
    table[index + 1] += table[index];
    table[index + 2] += table[index];
  }

  return table[number];
}

console.log(fibonacci(6)); // must return 8.
console.log(fibonacci(7)); // must return 13.
console.log(fibonacci(8)); // must return 21.
console.log(fibonacci(9)); // must return 34.
console.log(fibonacci(10)); // must return 55.
console.log(fibonacci(50)); // must return 12586269025
console.log(fibonacci(100)); // must return 354224848179262000000.
```

### Solution 2: Core Iterative Algorithm using two scalar variables.

- Big O Time Complexity: O(n)
- Big O Space Complexity: O(n)

```javascript

```
