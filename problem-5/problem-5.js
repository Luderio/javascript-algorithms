function gridTraveler(m, n) {
  // input type check
  if (typeof m !== "number" && typeof n !== "number") {
    throw new Error("input must be a type of 'Number'");
  }

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(2, 3));
console.log(gridTraveler(4, 4));
console.log(gridTraveler(6, 6));
console.log(gridTraveler(10, 10));
