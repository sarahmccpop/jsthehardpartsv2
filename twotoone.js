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
function longest2(s1, s2){
    let s1Array = convertStringtoLowerCaseArrayOfLetters(s1);
    const s2Array = convertStringtoLowerCaseArrayOfLetters(s2);
    s1Array = combineTwoArraysToOneArray(s1Array, s2Array);
    s1Array = returnUniqueArray(s1Array);
    s1Array = sortAndJoin(s1Array);
    return s1Array;
}

function convertStringtoLowerCaseArrayOfLetters(string){
    return string.toLowerCase().split('');
}

function combineTwoArraysToOneArray(array1, array2){
    const newArray = array1.concat(array2);
    return newArray;
}

function returnUniqueArray(array){
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
}

function sortAndJoin(array){
    return array.sort().join("");
}
console.log(longest("Sarah", "Harry"));
console.log(longest2("Sarah", "Harry"));

