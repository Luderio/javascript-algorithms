/**
 * Core Algorithm without Memoization
 * Will recursively call and resolve every **_gridTraveler(m, n)_** calls even the calls with the same return value (duplicated items).
 * Will become very slow in larger **_m,n_** grids.
 * Has **Big O Time Complexity** of **_O(2^n+m)_** or **_O(2<sup>n+m</sup>)_** or **_Exponential Time Complexity_**.
 * Has **Big O Space Complexity** of **_O(m + n) call stack_** or **_Linear Space Complexity / Linear Call Stack Depth_**.
 */

function gridTraveler(m, n) {
  // input type check
  if (typeof m !== "number" && typeof n !== "number") {
    throw new Error("input must be a type of 'Number'");
  }

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
}

console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(4, 4)); // 20
console.log(gridTraveler(6, 6)); // 252
console.log(gridTraveler(10, 10)); // 48620
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000.
