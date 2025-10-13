# Problem 10: Count Construct

- Write a fucntion **_countConstruct(target, wordBank)_** that accepts a target string and an array of strings.
- The function should return a **_number of ways_** that the **_target_** can be constructed by concatenating elements of the **_wordBank_** array.
- You may reuse elements of the **_wordBank_** as many times as needed.

**Examples:**

```javascript
countConstruct("abdcef", ["ab", "abc", "cd", "def", "abcd"]);
// should return "1" because the array at index 1 and 3 when combined is equal to "abcdef".

countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]);
// should return "0"

countConstruct("", ["dog", "cat", "mouse"]);
// should return "1"
```

## Code Solutions:

### Solution 1: Core Algorithm without Memoization.

- Unoptimized
- Big O Time Complexity: O(n^m) or Exponential Time Cimplexity.
- Big O Space Complexity: O(m^2) or Quadtratic Space Complexity.

```javascript
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
```

### Solution 2: Core Algorithm with Memoization.

- Optimized
- Big O Time Complexity: O(n \* m^2) or Quadratic Time Complexity.
- Big O Space COmplexity: O(m^2) or Quadratic Time Complexity.

```javascript
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
); // should return 0, very fast.
```
