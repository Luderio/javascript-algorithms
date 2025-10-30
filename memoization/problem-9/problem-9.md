# Problem 9: Can Construct

- Write a fucntion **_canConstruct(target, wordBank)_** that accepts a target string and an array of strings.
- The function should return a **_boolean_** indicating wether or not the **_target_** can be constructed by concatenating elements of the **_wordBank_** array.
- You may reuse elements of the **_wordBank_** as many times as needed.

**Examples:**

```javascript
canConstruct("abdcef", ["ab", "abc", "cd", "def", "abcd"]);
// should return "true" because the array at index 1 and 3 when combined is equal to "abcdef".

canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]);
// should return "false"

canConstruct("", ["dog", "cat", "mouse"]);
// should return "true"
```

## Code Solutions

### Solution 1: Core Algorithm without Memoization.

- Unoptimized
- Big O Time Complexity: O(n^m) or Exponential Time Cimplexity.
- Big O Space Complexity: O(m^2) or Quadtratic Space Complexity.

```javascript
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
```

### Solution 2: Core Algorithm with Memoization.

- Optimized
- Big O Time Complexity: O(n \* m^2) or Quadratic Time Complexity.
- Big O Space COmplexity: O(m^2) or Quadratic Time Complexity.

```javascript
function canConstruct(target, wordBank, memo = {}) {
  // input type checking
  if (typeof target !== "string") {
    throw new Error("argument must be a type of 'string'");
  }

  if (!Array.isArray(wordBank)) {
    throw new Error("argument must be an array of 'string'");
  }

  if (target in memo) return memo[target];
  if (target.length === 0 || target === "") return true;

  for (let item of wordBank) {
    if (target.startsWith(item)) {
      let new_target = target.replace(item, "");
      let result = canConstruct(new_target, wordBank, memo);
      if (result === true) {
        memo[target] = true;
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
```
