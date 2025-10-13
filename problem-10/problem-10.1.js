/**
 * Core Algorithm with Memoization
 * Optimized
 * Big O Time Complexity: O(n * m^2) or Quadratic Time Complexity.
 * Big O Space COmplexity: O(m^2) or Quadratic Time Complexity.
 */

function countConstruct(target, wordBank, memo = {}) {
  // input type checking.
  if (typeof target !== "string") {
    throw new Error(`argument must be a type of 'String'`);
  }

  if (!Array.isArray(wordBank)) {
    throw new Error(`argument must be an array of strings`);
  }

  if (target in memo) return memo[target];

  if (target.length === 0 || target === "") return 1;
  let result = 0;

  for (let item of wordBank) {
    if (target.startsWith(item)) {
      const new_target = target.replace(item, "");
      //   console.log([item, target, new_target]);
      result += countConstruct(new_target, wordBank, memo);
      memo[target] = result;
    }
  }
  memo[target] = result;
  return result;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Time Complexity: O(n * m^2)
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
); // should return 0, very slow.
