/**
 * Using Binomial Coeficient formula (My Preferred version)
 * Follows this binomial Coeficient (Multiplicative Form) formula: C(total, k) = (from i = 1 to k) (total - k + i) / i
 * The formula just needs to be tweaked to: C(total - 2, k - 1) = (from i = 1 to k) (total - k + i) / i to handle proper grid-path counting.
 * The formula will be: C(m + n - 2, n - 1) = (from i = 1 to n) (total - n + i) / i or C(m + n - 2, m - 1) = (from i = 1 to m) (total - m + i) / i (which ever axis (m or n) is smaller)
 * Has Big O Time Complexity of: O(min(m, n)) or Linear Time Complexity
 * Has Big O Space Complexity of: O(1) or Constant Space Complexity
 */

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

console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(4, 4)); // 20
console.log(gridTraveler(6, 6)); // 252
console.log(gridTraveler(10, 10)); // 48620
console.log(gridTraveler(50, 50)); // 254,776,122,589,808,670,000,000,000,000.
