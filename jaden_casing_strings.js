// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
/* version 1 - attempt at it without charAt
String.prototype.toJadenCase2 = function (tweet) {
    tweet = tweet.toLowerCase();
    const words = tweet.split(" "); 
    let letters = 'X';
    let newString = '';
        for (let i = 0; i < 2; i++){
         
        letters = words[i].split('');
        letters = letters[0].toUpperCase() + letters[1,];
         
        // newString = letters.toString();
         }

         return letters.join('');
   
  };
 */

// version 2 which has correct functionality but does not pass in codewars
String.prototype.toJadenCase2 = function (tweet) {
  tweet = tweet.toLowerCase(); // lowercase everything first
  const words = tweet.split(" "); // this makes it an array charAt only works on strings not arrays
  // tidy up - tweet has two functions on it which could be done in one line
  for (let i = 0; i < words.length; i++) {
    // loop through each word assigning uppercase letter at front
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); // access each word and manipulate
  }
  return words.join(" "); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
};
console.log("Version 2: " + String.prototype.toJadenCase2("mY nAME iS sARAH"));
console.log("Version 2: " + String.prototype.toJadenCase2("my string IS THIS"));

// Version 3 passed codewars
// this helped me understand String.prototype
// https://stackoverflow.com/questions/49751251/how-to-get-string-from-string-prototype
const myString = "this is my STRING";
String.prototype.toJadenCase3 = function () {
  const words = this.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    // loop through each word assigning uppercase letter at front
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); // access each word and manipulate
  }
  return words.join(" ");
};

console.log("Version 3: " + "SaRaH WAS here".toJadenCase3());
console.log("Version 3: " + myString.toJadenCase3());

// version 4 with guidance from Andrew
const myStrings = {
  a: "SaRah was HERE AGain",
  b: "How can mirrors be real if our eyes aren't real",
};
const testString = myStrings.b;
String.prototype.toJadenCase4 = function () {
  this.toLowerCase();
  return this;
};

function toLowerCaseAndSplit(string) {
  return string.toLowerCase().split(" ");
}

console.log("Version 4: " + testString.toJadenCase4());
const myObject = { a: "hello", b: "world" };
const myElement = myObject.c; // at this point myElement becomes `undefined` because `c` doesn't exist in `myObject`
console.log("Should return string: ", typeof myObject.b);
console.log("Should return undefined: ",typeof myElement);
