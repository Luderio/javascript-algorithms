# Problem 9: Can Construct

- Write a fucntion **_canConstruct(target, wordBank)_** that accepts a target string and an array of strings.
- The function should return a **_boolean_** indicating wether or not the **_target_** can be constructed by concatenation elements of the **_wordBank_** array.
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
