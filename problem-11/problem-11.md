# Problem 10: All Construct

- Write a fucntion **_allConstruct(target, wordBank)_** that accepts a target string and an array of strings.
- The function should return a **_2D array_** containing **_all the ways_** that the **_target_** can be constructed by concatenating elements of the **_wordBank_** array.
- You may reuse elements of the **_wordBank_** as many times as needed.

**Examples:**

```javascript
allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]);
// should return [[abc, def]] because the array at index 1 and 3 when combined is equal to "abcdef".

allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]);
// should return []

allConstruct("", ["dog", "cat", "mouse"]);
// should return [[]]

allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]);
// should return [["purp", "le"], ["p", "ur", "p", "le"]]
```

## Code Solutions:

### Solution 1: Core Algorithm without Memoization.

```javascript
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
```

### Solution 2: Core Algorithm with Memoization.

```javascript
function allConstruct(target, wordBank, memo = {}) {
  // input type checking.

  if (typeof target !== "string") {
    throw new Error("argument must be a type of 'String'");
  }

  if (!Array.isArray(wordBank)) {
    throw new Error("argument must be an array of 'strings'");
  }

  if (target in memo) return memo[target];
  if (target.length === 0 || target === "") return [[]];

  const constructs = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const new_target = target.replace(word, "");
      const words = allConstruct(new_target, wordBank, memo);
      const result = words.map((items) => [word, ...items]);
      constructs.push(...result);
    }
  }
  memo[target] = constructs;
  return constructs;
}

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
```
