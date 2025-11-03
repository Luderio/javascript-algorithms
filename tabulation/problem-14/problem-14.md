# Problem 14: CanSum Tabulation

- Write a function **_canSum(targetSum, numbers)_** that takes in a _targetSum_ and an _array of numbers_ as arguments.
- The fuction should return a _boolean value_ indicating wether or not it is possible to generate the _targetSum_ using the _numbers_ from the array.
- You may use an element of the array as many times as needed.
- You may assume that all input numbers are non-negative.

**Example:**

```javascript
canSum(7, [5, 3, 4, 7]); // should return true.
```

## Code Solutions

- Big O Notation (**_m = targetSum, n = numbers_**)
- Time Complexity: **_O(mn)_**
- Space Complexity: **_O(m)_**

```javascript
function canSum(targetSum, numbers) {
  // input type checking.
  if (typeof targetSum !== "number") {
    throw new Error("argument must be a type of 'String'.");
  }

  if (!Array.isArray(numbers)) {
    throw new Error("argument must be an array of numbers.");
  }

  const table = Array(targetSum + 1).fill(false); // Visualize it as a table
  table[0] = true;

  for (let item = 0; item <= targetSum; item++) {
    if (table[item] === true) {
      for (let number of numbers) {
        table[item + number] = true;
      }
    }
  }

  return table[targetSum];
}

console.log(canSum(7, [5, 3, 4, 7])); // should return true.
```
