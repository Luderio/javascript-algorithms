# Problem 5: Grid Traveler

- Say that you are a traveler on a _2D grid_.
- You begin in the _top-left_ corner and your goal is to travel to the _bottom-right_ corner.
- You may only move _down_ or _right_.
- In how many ways can you travel to the goal on the grid with dimensions **_m \* n_**?
- Write a function **_gridTraveler(m, n)_** that satisfies the requirements above.

## Possible Solution:

- **Brute Force or Classic Aproach**: Looping through each operations even the duplicates.
- **Memoization**: Memoize the repeating patters to illiminate duplicates.
- **Binomial Coeficient (Multiplicative Form)**: _C(total, k) = (from i = 1 to k) (total - k + i) / i_

## Code Solution:

### Using Brute Force

- Core Algorithm without Memoization logic.
- Will recursively call and resolve every **_gridTraveler(m, n)_** calls even the calls with the same return value (duplicated items).
- Will become very slow in larger **_m,n_** grids.
- Has **Big O Time Complexity** of **_O(2^n+m)_** or **_O(2<sup>n+m</sup>)_** or **_Exponential Time Complexity_**.

```javascript
function gridTraveler(m, n) {
  // input type check
  if (typeof m !== "number" && typeof n !== "number") {
    throw new Error("input must be a type of 'Number'");
  }

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
}

console.log(gridTraveler(2, 3)); // 3 paths, fast
console.log(gridTraveler(4, 4)); // 20 paths, fast
console.log(gridTraveler(6, 6)); // 252 paths, fast
console.log(gridTraveler(10, 10)); // 48620, paths, fast
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000 paths, very slow.
```

### Using Memoization

- Core Algorithm with Memoization logic. (Optimized Version).
- Adds a new argument with default value: memo = {} which is an object.
- Every result gets added to the memo object and the memo value is being passed down by reference to the recursive calls to act as a cache of the result.
- At every iteration, the algorithm will check if the key,value pair is already present in the object. if yes, the stored result is used immediately cuttting down on execution time.
- Has **Big O Time Complexity** of **_O(n\*m)_** or **_Linear Time Complexity_**.

```javascript
function gridTraveler(m, n, memo = {}) {
  // input type check
  if (typeof m !== "number" && typeof n !== "number") {
    throw new Error("input must be a type of 'Number'");
  }

  const key = `${m},${n}`;
  if (key in memo) return memo[key];

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[key];
}

console.log(gridTraveler(2, 3)); // 3 paths, fast
console.log(gridTraveler(4, 4)); // 20 paths, fast
console.log(gridTraveler(6, 6)); // 252 paths, fast
console.log(gridTraveler(10, 10)); // 48620 paths, fast
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000 paths, fast.
```

### Using Binomial Coeficient Formula

```javascript

```
