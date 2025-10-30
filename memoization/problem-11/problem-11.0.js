/**
 * Core Algorithm without Memoization
 * Unoptimized
 * Big O Notation Time Complexity of O(n^m) or Exponential Time Complexity
 * Big O Notation Time Complexity of O(m) or Linear Time Complexity
 */

function allConstruct(target, wordBank) {
  // input type checking.

  if (typeof target !== "string") {
    throw new Error("argument must be a type of 'String'");
  }

  if (!Array.isArray(wordBank)) {
    throw new Error("argument must be an array of 'strings'");
  }

  if (target.length === 0 || target === "") return [[]];

  const constructs = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const new_target = target.replace(word, "");
      const words = allConstruct(new_target, wordBank);
      const result = words.map((items) => [word, ...items]);
      constructs.push(...result);
    }
  }

  return constructs;
}

/**
 * m = target.length
 * n = wordBank.length
 *
 * Time Complexity: O(n^m)
 * Space Complexity: O(m)
 */

// should return [[abc, def]] because the array at index 1 and 3 when combined is equal to "abcdef".
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

// should return []
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

// should return [[]]
console.log(allConstruct("", ["dog", "cat", "mouse"]));

// should return [["purp", "le"], ["p", "ur", "p", "le"]]
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

// should return []
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);
