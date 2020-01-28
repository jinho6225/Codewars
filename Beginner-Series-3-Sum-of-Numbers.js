/*
## #codewars - Stop_gninnipS_My_sdroW!
- OICEs are Outputs, Inputs, Constraints and Edge cases
  - inputs: two integers a and b, which can be positive or negative
  - outputs: number of sum
  - edge case:?
  - constraints: ?

- this is my though process
  - check which one is smaller
  - iterate through from smallest to biggest
  - add and return it

*/

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a,b) {
  if (a === b) {
    return a
  }
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum = sum + i
    }
  } else {
    for (let i = a; i <= b; i++) {
      sum = sum + i
    }
  }
  return sum
}
getSum(1, 0)// == 1   // 1 + 0 = 1
getSum(1, 2)// == 3   // 1 + 2 = 3
getSum(0, 1)// == 1   // 0 + 1 = 1
getSum(1, 1)// == 1   // 1 Since both are same
getSum(-1, 0)// == -1 // -1 + 0 = -1
getSum(-1, 2)// == 2  // -1 + 0 + 1 + 2 = 2
```

### others code
```javascript
const getSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
```
