/**
 * Core Algorithm with Memoization
 */

function canConstruct(target, wordBank, memo = {}) {
  // input type checking
  if (typeof target !== "string") {
    throw new Error("argument must be a type of 'string'");
  }

  if (!Array.isArray(wordBank)) {
    throw new Error("argument must be an array of 'string'");
  }

  if (target in memo) return memo[target];
  if (target.length === 0 || target === undefined) return true;

  for (let item of wordBank) {
    if (target.startsWith(item)) {
      let new_target = target.replace(item, "");
      let result = canConstruct(new_target, wordBank, memo);
      if (result === true) {
        memo[new_target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

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
); // should return false. Fast
