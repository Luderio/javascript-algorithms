/**
 * Core Algorithm without Memoization.
 * Unoptimized
 * Big O Time Complexity: O(n^m) or Exponential Time Cimplexity.
 * Big O Space Complexity: O(m^2) or Quadtratic Space Complexity.
 */

function canConstruct(target, wordBank) {
  // input type checking
  if (typeof target !== "string") {
    throw new Error("argument must be a type of 'string'");
  }

  if (!Array.isArray(wordBank)) {
    throw new Error("argument must be an array of 'string'");
  }

  //   console.log(target.length);
  if (target.length === 0 || target === "") return true;

  for (let item of wordBank) {
    if (target.startsWith(item)) {
      let new_target = target.replace(item, "");
      let result = canConstruct(new_target, wordBank);
      if (result === true) return true;
    }
  }

  return false;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Time Complexity: O(n^m * m) or O(n^m)
 * Space Complexity: O(m^2)
 */

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // should return true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // should return false.
console.log(canConstruct("", ["dog", "cat", "mouse"])); // should return true.
console.log(canConstruct("dogdogcat", ["dog", "cat", "mouse"])); // should return true.
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // should return true.
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // should return false. Super slow
