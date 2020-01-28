 /*
 ### Sum of Digits / Digital Root

      In this kata, you must create a digital root function.
      A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

      Here's how it works:
      digital_root(16)
      => 1 + 6
      => 7
      digital_root(942)
      => 9 + 4 + 2
      => 15 ...
      => 1 + 5
      => 6
      digital_root(132189)
      => 1 + 3 + 2 + 1 + 8 + 9
      => 24 ...
      => 2 + 4
      => 6
      digital_root(493193)
      => 4 + 9 + 3 + 1 + 9 + 3
      => 29 ...
      => 2 + 9
      => 11 ...
      => 1 + 1
      => 2

*/

function digital_root(n) {
  if (n.toString().length === 1) {
    return n
  }
  if (n.toString().length > 1)
  var arr = n.toString().split('')
  n = 0;
  for (let i = 0; i < arr.length; i++) {
    n = n + Number(arr[i])
  }
  return digital_root(n)
}

//testing code below
Test.assertEquals( digital_root(16), 7 )
Test.assertEquals( digital_root(456), 6 )


```
