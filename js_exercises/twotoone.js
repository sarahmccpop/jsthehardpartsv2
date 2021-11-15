// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript
// version 1
// this function does it all in one
// passed codewars
function longest(s1, s2) {
  const s1Array = s1.toLowerCase().split("");
  const s2Array = s2.toLowerCase().split("");
  s1Array.push(...s2Array);
  const uniq = [...new Set(s1Array)];

  return uniq.sort().join("");
}

// version 2
// attempt trying with each change broken into a function
// this version also passes codewars
function longest2(s1, s2) {
  let s1Array = stringAllLowercase(s1);
  const s2Array = stringAllLowercase(s2);
  s1Array = oneArrayFromTwoCombinedArrays(s1Array, s2Array);
  s1Array = uniqueSetFromArray(s1Array);
  s1Array = sortedStringFromArray(s1Array);
  return s1Array;
}

function stringAllLowercase(string) {
  return string.toLowerCase().split("");
}

function oneArrayFromTwoCombinedArrays(array1, array2) {
  const newArray = array1.concat(array2);
  return newArray;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function uniqueSetFromArray(array) {
  const uniqueSet = [...new Set(array)];
  return uniqueSet;
}

function sortedStringFromArray(array) {
  return array.sort().join("");
}

// testing
console.log("Version 1: ", longest("Sarah", "Harry"));
console.log("Version 2: ", longest2("Sarah", "Harry"));
