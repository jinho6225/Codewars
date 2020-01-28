/*
  ### Square Every Digit

      Welcome. In this kata, you are asked to square every digit of a number.
      For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
      Note: The function accepts an integer and returns an integer


*/

function squareDigits(num){
  //may the code be with you
  var arr = num.toString().split('')
  var newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]) * Number(arr[i]))
  }
  return Number(newArr.join(''))
}

//testing code below
Test.assertEquals(squareDigits(9119), 811181);


```
