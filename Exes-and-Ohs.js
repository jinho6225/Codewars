/*
      ### Exes and Ohs

        Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

        Examples input/output:
        XO("ooxx") => true
        XO("xooxx") => false
        XO("ooxXm") => true
        XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
        XO("zzoo") => false

*/

function XO(str) {
str = str.toLowerCase()
var arr = str.split('')
var countOfX = 0;
var countOfO = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      countOfX++
    }
    if (arr[i] === 'o') {
      countOfO++
    }
  }
  if (countOfX === countOfO) {
    return true;
  } else {
    return false
  }
}

//testing code below
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);


```
