# Problem 6: Can Sum

- Write a function **_canSum(targetSum, numbers)_** that takes in a _targetSum_ and an _array of numbers_ as arguments.
- The fuction should return a _boolean value_ indicating wether or not it is possible to generate the _targetSum_ using the _numbers_ from the array.
- You may use an element of the array as many times as needed.
- You may assume that all input numbers are non-negative.

**Example:**

```javascript
canSum(7, [5, 3, 4, 7]); // should return true.
```

## Code

### Solution without memoization:

- Core Algorithm without Memoization.
- Big O Time Complexity: O(n<sup>m</sup>)
- Big O Space Complexity: O(m)

```javascript
function canSum(targetSum, numbers) {
  // input type checking.

  if (typeof targetSum !== "number") {
    throw new Error(
      "argument 'targetSum' must be a type of 'Number' and a non-negative number."
    );
  }

  if (!Array.isArray(numbers)) {
    throw new Error(
      "argument 'numbers' must be an array of non-negative numbers."
    );
  }

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const difference = targetSum - num;
    if (canSum(difference, numbers, memo) === true) {
      return true;
    }
  }
  return false;
}

console.log(canSum(7, [2, 3])); // fast
console.log(canSum(7, [7, 3, 4, 7])); // fast
console.log(canSum(7, [2, 4])); // fast
console.log(canSum(8, [2, 3, 5])); // fast
console.log(canSum(300, [7, 14])); // slow
```
