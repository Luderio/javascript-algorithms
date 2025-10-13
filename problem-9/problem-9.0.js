/**
 * My Own Solution.
 */

function canConstruct(target, wordBank) {
  // input type checking.
  if (typeof target !== "string") {
    throw new Error(`argument must be a type of 'String'`);
  }

  if (!Array.isArray(wordBank)) {
    throw new Error(`argument must be an array of strings`);
  }

  if (target.length === 0 || target.trim() === "") return true;

  const combinations = [];

  for (let outer = 0; outer < wordBank.length; outer++) {
    for (let inner = 0; inner < wordBank.length; inner++) {
      const combination = `${wordBank[outer]}${wordBank[inner]}`;
      if (target === combination) {
        return true;
      }
    }
  }
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // should return true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // should return false.
console.log(canConstruct("", ["dog", "cat", "mouse"])); // should return true.
console.log(canConstruct("dogdogcat", ["dog", "cat", "mouse"])); // should return true.
