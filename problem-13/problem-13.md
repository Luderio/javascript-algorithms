# Problem 13: Solve Grid Traveler using Tabulation

- Say that you are a traveler on a _2D grid_.
- You begin in the _top-left_ corner and your goal is to travel to the _bottom-right_ corner.
- You may only move _down_ or _right_.
- In how many ways can you travel to the goal on the grid with dimensions **_m \* n_**?
- Write a function **_gridTraveler(m, n)_** that satisfies the requirements above.

## Code Solution:

- Core Algorithm using Tabulation
- Big O Time Complexity: O(mn)
- Big O Space Complexity: O(mn)

```javascript
function gridTraveler(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let outer = 0; outer <= m; outer++) {
    for (let inner = 0; inner <= n; inner++) {
      const current = table[outer][inner]; // current position.
      if (inner + 1 <= n) table[outer][inner + 1] += current; // increment right neighbor if the position is valid.
      if (outer + 1 <= m) table[outer + 1][inner] += current; // increment down neighbor if the position is valid.
    }
  }

  return table[m][n];
}

/**
 * m = rows
 * n = columns
 *
 * Time Complexity: O(mn)
 * Space Complexity: O(mn)
 */

console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(4, 4)); // 20
console.log(gridTraveler(6, 6)); // 252
console.log(gridTraveler(10, 10)); // 48620
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000.
```
