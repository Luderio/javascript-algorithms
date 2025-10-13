/**
 * Core Algorithm without Memoization
 */

function countConstruct(target, wordBank) {
  // input type checking
  // input type checking.
  if (typeof target !== "string") {
    throw new Error(`argument must be a type of 'String'`);
  }

  if (!Array.isArray(wordBank)) {
    throw new Error(`argument must be an array of strings`);
  }

  return 0;
}
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // should return true
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // should return false.
console.log(countConstruct("", ["dog", "cat", "mouse"])); // should return true.
// console.log(countConstruct("dogdogcat", ["dog", "cat", "mouse"])); // should return true.
// console.log(
//   countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// ); // should return true.
// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// ); // should return false. slow
