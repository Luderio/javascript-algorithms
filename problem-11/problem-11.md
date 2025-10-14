# Problem 10: All Construct

- Write a fucntion **_allConstruct(target, wordBank)_** that accepts a target string and an array of strings.
- The function should return a **_2D array_** containing **_all the ways_** that the **_target_** can be constructed by concatenating elements of the **_wordBank_** array.
- You may reuse elements of the **_wordBank_** as many times as needed.

**Examples:**

```javascript
allConstruct("abdcef", ["ab", "abc", "cd", "def", "abcd"]);
// should return [[abc, def]] because the array at index 1 and 3 when combined is equal to "abcdef".

allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]);
// should return []

allConstruct("", ["dog", "cat", "mouse"]);
// should return []

allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]);
// should return [["purp", "le"], ["p", "ur", "p", "le"]]
```

## Code Solutions:

### Solution 1: Core Algorithm without Memoization.

```javascript

```

### Solution 2: Core Algorithm with Memoization.

```javascript

```
