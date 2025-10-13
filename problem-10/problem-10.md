# Problem 10: Count Construct

- Write a fucntion **_countConstruct(target, wordBank)_** that accepts a target string and an array of strings.
- The function should return a **_number of ways_** that the **_target_** can be constructed by concatenating elements of the **_wordBank_** array.
- You may reuse elements of the **_wordBank_** as many times as needed.

**Examples:**

```javascript
canConstruct("abdcef", ["ab", "abc", "cd", "def", "abcd"]);
// should return "1" because the array at index 1 and 3 when combined is equal to "abcdef".

canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]);
// should return "0"

canConstruct("", ["dog", "cat", "mouse"]);
// should return "1"
```

## Code Solutions:
