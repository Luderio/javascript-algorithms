// /**
//  * Core Algorithm without Memoization
//  * Will recursively call and resolve every **_gridTraveler(m, n)_** calls even the calls with the same return value (duplicated items).
//  * Will become very slow in larger **_m,n_** grids.
//  * Has **Big O Time Complexity** of **_O(2^n+m)_** or **_O(2<sup>n+m</sup>)_** or **_Exponential Time Complexity_**.
//  */

// function gridTraveler(m, n) {
//   // input type check
//   if (typeof m !== "number" && typeof n !== "number") {
//     throw new Error("input must be a type of 'Number'");
//   }

//   if (m === 0 || n === 0) return 0;
//   if (m === 1 && n === 1) return 1;
//   return gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
// }

// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(4, 4)); // 20
// console.log(gridTraveler(6, 6)); // 252
// console.log(gridTraveler(10, 10)); // 48620
// console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000.

//=========================================================================================

// /**
//  * Core Algorithm with Memoization logic. (Optimized Version).
//  * Adds a new argument with default value: memo = {} which is an object.
//  * Every result gets added to the memo object and the memo value is being passed down by reference to the recursive calls to act as a cache of the result.
//  * At every iteration, the algorithm will check if the key,value pair is already present in the object. if yes, the stored result is used immediately cuttting down on execution time.
//  * Has **Big O Time Complexity** of **_O(n\*m)_** or **_Linear Time Complexity_**.
//  */

// function gridTraveler(m, n, memo = {}) {
//   // input type check
//   if (typeof m !== "number" && typeof n !== "number") {
//     throw new Error("input must be a type of 'Number'");
//   }

//   const key = `${m},${n}`;
//   if (key in memo) return memo[key];

//   if (m === 0 || n === 0) return 0;
//   if (m === 1 && n === 1) return 1;

//   memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

//   return memo[key];
// }

// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(4, 4)); // 20
// console.log(gridTraveler(6, 6)); // 252
// console.log(gridTraveler(10, 10)); // 48620
// console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000.

//=========================================================================================

/**
 * Using Binomial Coeficient formula
 *
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
