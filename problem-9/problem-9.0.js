/**
 * Core Algorithm without Optimization
 */

function canConstruct(target, wordBank) {
  return target;
}

console.log(canConstruct("abdcef", ["ab", "abc", "cd", "def", "abcd"])); // should return true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // should return false
console.log(canConstruct("", ["dog", "cat", "mouse"])); // should return true
