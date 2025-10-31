/**
 *
 * Core Algorithm using Tabulation.
 * Big O Time Complexity: O(mn).
 * Big O Space Complexity: O(mn).
 */

function gridTraveler(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let row = 0; row <= m; row++) {
    for (let column = 0; column <= n; column++) {
      const current = table[row][column]; // current position.
      if (row + 1 <= m) table[row + 1][column] += current; // increment down neighbor if the position is valid.
      if (column + 1 <= n) table[row][column + 1] += current; // increment right neighbor if the position is valid.
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
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(4, 4)); // 20
console.log(gridTraveler(6, 6)); // 252
console.log(gridTraveler(10, 10)); // 48620
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000.
