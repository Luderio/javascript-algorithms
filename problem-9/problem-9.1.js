/**
 * Core Algorithm withou Optimization
 */

function canConstruct(target, wordBank) {
  // input type checking
  if (typeof target !== "string") {
    throw new Error("argument must be a type of 'string'");
  }

  if (!Array.isArray(wordBank)) {
    throw new Error("argument must be an array of 'string'");
  }

  return true;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // should return true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // should return false.
console.log(canConstruct("", ["dog", "cat", "mouse"])); // should return true.
console.log(canConstruct("dogdogcat", ["dog", "cat", "mouse"])); // should return false.
