# Problem 4

- Write a function _fib(n)_ that takes in a number as an argument.
- The function should return the _n-th_ number of the Fibonacci sequence.
- Make sure that the algorithm is optimized to handle larger fibonacci sequences.

---

**Fibonacci Sequence:**

- The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

**Examples:**

The first few Fibonacci numbers are:

```javascript
// zero-based fibonacci sequence.

n = 0, 1, 2, 3, 4, 5, 6, 7,  8,  9, ...
f = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

**_fib(7)_** should return **_13_** because the fibonacci number at position 7 is 13 from the above example.

---

## Code

The code solution below follows the fiboncci formula: **_fib(n) = fib(n - 1) + fib(n - 2)_** but with added argument: memo = {} for memoization to handle fibonacci numbers at larger sequence.

```javascript
function fib(n, memo = {}) {
  // input type checking
  if (typeof n !== "number") {
    throw new Error("input must be a type of 'number'");
  }

  // checks if the input n is already added in the memo object.
  if (n in memo) return memo[n];

  if (n < 2) {
    return n;
  }

  // fibonacci formula: fib = fib(n - 1) + fib(n - 2) for n >= 2.
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
console.log(fib(100)); // 354224848179262000000
```

### Code Explaination:

The code above follows the fiboncci formula: **_fib(n) = fib(n - 1) + fib(n - 2)_** but with added argument: memo = {} for memoization to handle fibonacci numbers at larger sequence.

following the formula **_as-it-is_**, our code will look like the code below:

```javascript
// classic fibonacci implementation (Zero-based)

function fib(n) {
  if (n < 2) {
    return n;
  }

  // fibonacci formula: fib = fib(n - 1) + fib(n - 2) for n >= 2.
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // 8, fast
console.log(fib(7)); // 13, fast
console.log(fib(8)); // 21, fast
console.log(fib(50)); // 12586269025, will be slow
console.log(fib(100)); // 354224848179262000000, will be slow
```

The code above is correct and will work on smaller **_n_** numbers but as the **_n_** gets higher, the code above will be slower at returning the result. This is because the classic fibonacci algorithm has a Big O Time Complexity of **_O(n<sup>2</sup>)_** or **_Exponential Time Complexity_** because it needs to resolve all of the return values even if it is a duplicated pattern.

To optimize the algorithm, it is recommended to use **_memoization_** to memoize the return value of each **_n_** arguments in an object and use that memoized result to immediately return a value if that **_n_** argument is already added inside the object, effectively cutting down recursive operations or the recurvise calls by eliminating the recursive calls on duplicate **_sub-tree_** patterns.

Using a **_memoization_** technique on our fibonacci algorithm, the **_Big O Time Complexity_** will be improved or optimized to **_O(2n)_**, or **_O(n_**), or a _Linear Time Complexity_, making it a much faster algorithm to return fibonacci values at a given **_n_** position even if the **_n_** gets larger.
