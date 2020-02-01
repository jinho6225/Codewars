/*
Descending Order
Your task is to make a function that can take any non-negative integer as a argument
and return it with its digits in descending order. Essentially,
rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
  var arr = n.toString().split('')
  var newArr = arr.map((x) => Number(x))
    newArr.sort(function(a,b) {
    return b-a
    })
  return Number(newArr.join(''))
}

// testing code below
Test.assertEquals(descendingOrder(0), 0)
Test.assertEquals(descendingOrder(1), 1)
Test.assertEquals(descendingOrder(123456789), 987654321)
