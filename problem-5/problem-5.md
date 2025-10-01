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
- Has **Big O Space Complexity** of **_O(m + n) call stack_** or **_Linear Space Complexity / Linear Call Stack Depth_**.

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

---

### Using Memoization

- Core Algorithm with Memoization logic. (Optimized Version).
- Adds a new argument with default value: memo = {} which is an object.
- Every result gets added to the memo object and the memo value is being passed down by reference to the recursive calls to act as a cache of the result.
- At every iteration, the algorithm will check if the key,value pair is already present in the object. if yes, the stored result is used immediately cuttting down on execution time.
- Has **Big O Time Complexity** of **_O(n\*m)_** or **_Quadtratic Time Complexity_**.
- Has **Big O Space Complexity** of **_O(n\*m)_** or **_Quadtratic Space Complexity_**.

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

---

### Using Binomial Coeficient Formula

- Using Binomial Coeficient formula (**_My Preferred version_**)
- Follows this binomial Coeficient (Multiplicative Form) formula: **_C(total, k) = (from i = 1 to k) (total - k + i) / i_**
- The formula just needs to be tweaked to: **_C(total - 2, k - 1) = (from i = 1 to k) (total - k + i) / i_** to handle proper grid-path counting.
- The formula will be: **_C(m + n - 2, n - 1) = (from i = 1 to n) (total - n + i) / i_** or **_C(m + n - 2, m - 1) = (from i = 1 to m) (total - m + i) / i_** (which ever axis (_m_ or _n_) is smaller)
- Has **Big O Time Complexity** of: **_O(min(m, n))_** or **_Linear Time Complexity_**
- Has **Big O Space Complexity** of: **_O(1)_** or **_Constant Space Complexity_**

```javascript
function gridTraveler(m, n) {
  if (typeof m !== "number" || typeof n !== "number") {
    throw new Error("Inputs must be numbers");
  }

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  const total = m + n - 2; // to accomodate the move restriction (down, and right or m - 1, and n - 1).
  const k = Math.min(m - 1, n - 1);
  let result = 1;

  for (let i = 1; i <= k; i++) {
    result = (result * (total - k + i)) / i;
  }

  return result;
}

console.log(gridTraveler(2, 3)); // 3 paths, fast
console.log(gridTraveler(4, 4)); // 20 paths, fast
console.log(gridTraveler(6, 6)); // 252 paths, fast
console.log(gridTraveler(10, 10)); // 48620 paths, fast
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000 paths, fast.
```

---

go to **[problem-5.js](https://github.com/Luderio/javascript-algorithms/blob/main/problem-3/problem-5.js)** file to see the full code.
