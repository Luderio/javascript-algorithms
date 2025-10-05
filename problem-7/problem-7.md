# Problem 7: How Sum

- Write a function **_howSum(targetSum, numbers)_** that takes in a targetSum and an array of numbers as arguments.
- The function should return an array containing any combination of elements that add up to exactly the targetSum.
- If there is no combination that adds up to the targetSum, then return **_null_**.
- If there are multiple combinations possible, you may return any single one.

**Example**

```javascript
howSum(7, [5, 3, 4, 7]); // should return  [3, 4] or [7]
howSum(8, [2, 3, 5]); // should return [2, 2, 2, 2]  or [3, 5]
howSum(7, [2, 4]); // should return null
howSum(0, [1, 2, 3]); // []
```

## Code Solution

### Solution 1: My Own Solution (Unoptimized)

- Big O Time Complexity: O(n \* m) or Linear Time Complexity
- Big O Space Complexity: O(m + n) or Linear Space Complexity

```javascript
function howSum(targetSum, numbers) {
  // inout type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument should be a type of 'number'.");
  }

  if (!Array.isArray(numbers) || numbers === undefined) {
    throw new Error("argument must be an array of numbers.");
  }

  const combinations = [];
  const current = numbers.shift();
  const next = numbers[0];

  if (targetSum === 0) return [];
  if (numbers.length === 0 || targetSum < 0) return null;
  if (current === targetSum) return current;
  if (current + next === targetSum) return [current, next];

  let sum = 0;
  while (sum < targetSum) {
    combinations.push(current);
    sum += current;
  }
  if (sum === targetSum) return combinations;

  return howSum(targetSum, numbers);
}

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null
console.log(howSum(7, [3, 4])); // should return null
console.log(howSum(7, [4, 3])); // should return null
console.log(howSum(0, [1, 2, 3])); // []
console.log(howSum(300, [1, 2, 3])); // [1, 1, 1, 1, 1, 1, 1, ... 293 more items]
```

go to **[problem-7.0.js](https://github.com/Luderio/javascript-algorithms/blob/main/problem-7/problem-7.0.js)** to see the full code.

---

### Solution 2: My Own Solution (Optimized)

- This version removes the while loop from the previous version improving the Time Complexity
- Big O Time Complexity: O(m/n[i] \* n) or O(m \* n) or Linear Time Complexity
- Big O Space Complexity: O(n + m) or Linear Space Complexity.

```javascript
function howSum(targetSum, numbers) {
  // inout type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument should be a type of 'number'.");
  }

  if (!Array.isArray(numbers) || numbers === undefined) {
    throw new Error("argument must be an array of numbers.");
  }

  const combinations = [];
  const current = numbers.shift();
  const next = numbers[0];

  if (targetSum === 0) return [];
  if (numbers.length === 0 || targetSum < 0) return null;
  if (current === targetSum) return current;
  if (current + next === targetSum) return [current, next];
  if (targetSum % current === 0) {
    return new Array(targetSum / current).fill(current);
  }

  return howSum(targetSum, numbers);
}

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null
console.log(howSum(7, [3, 4])); // should return [3, 4]
console.log(howSum(0, [1, 2, 3])); // []
console.log(howSum(300, [1, 2, 3])); // [1, 1, 1, 1, 1, 1, 1, ... 293 more items]
```

go to **[problem-7.1.js](https://github.com/Luderio/javascript-algorithms/blob/main/problem-7/problem-7.1.js)** to see the full code.

---

### Solution 3: (Combinatorial Subset Sum) without Memoization

- Big O Time Complexity: O(n^m) or Exponential Time Complexity
- Big O Space Complexity: O(m + n) or Linear Space Complexity

```javascript
function howSum(targetSum, numbers) {
  // inout type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument should be a type of 'number'.");
  }

  if (!Array.isArray(numbers) || numbers === undefined) {
    throw new Error("argument must be an array of numbers.");
  }

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    let remaining = targetSum - number;
    let remainder = howSum(remaining, numbers);
    if (remainder !== null) {
      return [...remainder, number];
    }
  }
  return null;
}

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null
console.log(howSum(7, [3, 4])); // should return [3, 4]
console.log(howSum(0, [1, 2, 3])); // []
console.log(howSum(300, [1, 2, 3])); // [1, 1, 1, 1, 1, 1, 1, ... 293 more items]
```

go to **[problem-7.2.js](https://github.com/Luderio/javascript-algorithms/blob/main/problem-7/problem-7.2.js)** to see the full code.

---

### Solution 4: ### Solution 3: (Combinatorial Subset Sum) with Memoization

- Core Algorithm with Memoization
- Big O Time Complexity: O(m\*n) or Linear Time Complexity
- Big O Space Complexity: O(m) or Linear Time Complexity

```javascript
function howSum(targetSum, numbers, memo = {}) {
  // inout type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument should be a type of 'number'.");
  }

  if (!Array.isArray(numbers) || numbers === undefined) {
    throw new Error("argument must be an array of numbers.");
  }

  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    let remaining = targetSum - number;
    let remainder = howSum(remaining, numbers, memo);
    if (remainder !== null) {
      memo[targetSum] = [...remainder, number];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum(7, [5, 3, 4, 7])); // should return  [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // should return [2, 2, 2, 2]  or [3, 5]
console.log(howSum(7, [2, 4])); // should return null
console.log(howSum(7, [3, 4])); // should return [3, 4]
console.log(howSum(0, [1, 2, 3])); // []
console.log(howSum(300, [1, 2, 3])); // [1, 1, 1, 1, 1, 1, 1, ... 293 more items]
```

go to **[problem-7.3.js](https://github.com/Luderio/javascript-algorithms/blob/main/problem-7/problem-7.3.js)** to see the full code.

---
