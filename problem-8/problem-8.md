# Problem 8: Best Sum

- Write a function **_bestSum(targetSum, numbers)_** that takes in a _targetSum_ and an _array of numbers_ as arguments.
- The function should return an _array_ containing the shortest combination of numbers that add up to exactly the _targetSum_.
- If there is a tie for the shortest combination, you may return any one of the shortest.

**Examples:**

```javascript
bestSum(7, [5, 3, 4, 7]);
/**
 * will return [3, 4], and [7]
 * the return value should be the shortest combination: [7]
 */

bestSum(8, [2, 3, 5]);
/**
 * will return [2, 2, 2, 2], [2, 3, 3], and [3, 5]
 * the return value should be the shortest combination: [3, 5]
 */
```

## Code Solutions

### Solution 1: Brute force

```javascript
/**
 * Core Algorithm without Memoization
 * Time Complexity: O(n^m * m)
 * Space Complexity: O(m * m) or O(m^2)
 */

function bestSum(targetSum, numbers) {
  if (typeof targetSum !== "number") {
    throw new Error("argument must be a type of 'number'");
  }

  if (!Array.isArray(numbers)) {
    throw new Error("argument must be an array of numbers");
  }

  let combinations = null;

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    let remainder = targetSum - number;
    let result = bestSum(remainder, numbers);
    if (result !== null) {
      const combination = [...result, number];
      if (combinations === null) combinations = combination;
      if (combinations !== null && combination.length < combinations.length) {
        combinations = combination;
      }
    }
  }

  return combinations;
}

console.log(bestSum(7, [5, 3, 4, 7])); // should return [7]
console.log(bestSum(8, [2, 3, 5])); // should return [3, 5]
console.log(bestSum(8, [1, 4, 5])); // should return [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // should return [4, 4]
```
