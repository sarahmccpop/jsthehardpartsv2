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
String.prototype.toJadenCase = function (tweet) {
    tweet = tweet.toLowerCase(); // lowercase everything first 
    const words = tweet.split(" "); // this makes it an array charAt only works on strings not arrays
    // tidy up - tweet has two functions on it which could be done in one line 
    for (let i = 0; i < words.length; i++){ // loop through each word assigning uppercase letter at front
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); // access each word and manipulate
    }
    return words.join(' '); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
}

console.log(String.prototype.toJadenCase("mY nAME iS sARAH"));  
console.log(String.prototype.toJadenCase2("mY nAME iS sARAH"));  

// Version 3 passed codewars
// this helped me understand String.prototype
// https://stackoverflow.com/questions/49751251/how-to-get-string-from-string-prototype
let myString = "this is my STRING";
String.prototype.toJadenCase3 = function() {
    let words = this.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++){ // loop through each word assigning uppercase letter at front
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); // access each word and manipulate
    }
    return words.join(' ');
} 
console.log("SaRaH WAS here".toJadenCase3());
console.log(myString.toJadenCase3());
