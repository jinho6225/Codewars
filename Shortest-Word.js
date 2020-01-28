/*

      ### Shortest Word

      Simple, given a string of words, return the length of the shortest word(s).
      String will never be empty and you do not need to account for different data types.


*/

function findShort(s){
  var arr = s.split(' ')
  var shortestWord = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestWord.length) {
      shortestWord = arr[i]
    }
  }
  return shortestWord.length
}

//testing code below

Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
});

```
