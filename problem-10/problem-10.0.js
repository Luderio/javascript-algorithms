/**
 * Core Algorithm without Memoization.
 * Unoptimized
 * Big O Time Complexity: O(n^m) or Exponential Time Cimplexity.
 * Big O Space Complexity: O(m^2) or Quadtratic Space Complexity.
 */

function countConstruct(target, wordBank) {
  // input type checking.
  if (typeof target !== "string") {
    throw new Error(`argument must be a type of 'String'`);
  }

  if (!Array.isArray(wordBank)) {
    throw new Error(`argument must be an array of strings`);
  }

  if (target.length === 0 || target === "") return 1;
  let result = 0;

  for (let item of wordBank) {
    if (target.startsWith(item)) {
      const new_target = target.replace(item, "");
      //   console.log([item, target, new_target]);
      result += countConstruct(new_target, wordBank);
    }
  }
  return result;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Time Complexity: O(n^m * m) or O(n^m)
 * Space Complexity: O(m^2)
 */

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // should return 1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // should return 0.
console.log(countConstruct("", ["dog", "cat", "mouse"])); // should return 1.
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // should return 2.
console.log(countConstruct("dogdogcat", ["dog", "cat", "mouse"])); // should return 1.
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // should return 4.
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // should return 0. very slow
