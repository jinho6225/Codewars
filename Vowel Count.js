/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  var vowel = ['a','e','i','o','u'];
  var arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes(arr[i])) {
      vowelsCount++
    }
  }
  return vowelsCount;
}

// testing code below
describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
