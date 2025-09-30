function gridTraveler(m, n) {
  // input type check
  if (typeof m !== "number" && typeof n !== "number") {
    throw new Error("input must be a type of 'Number'");
  }
}

console.log(gridTraveler(4, 4));
