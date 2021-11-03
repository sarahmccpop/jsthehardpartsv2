// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
const solve = (word) => {
  let uppercaseNumber = 0;
  let lowercaseNumber = 0;
  const countAndConvert = (word) => {
    let charAt = word.split("");
    let uppercaseLetterCheck = /[A-Z]/g;
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      const letterBeingChecked = charAt[i];
      const numberOfUppercaseLettersFound =
        letterBeingChecked.match(uppercaseLetterCheck);
      if (numberOfUppercaseLettersFound) {
        uppercaseNumber++;
      }
    }
    lowercaseNumber = word.length - uppercaseNumber;

    if (lowercaseNumber === uppercaseNumber) {
      newWord = word.toLowerCase();
    } else if (lowercaseNumber > uppercaseNumber) {
      newWord = word.toLowerCase();
    } else {
      newWord = word.toUpperCase();
    }

    return newWord;
  };
  return countAndConvert(word);
};
console.log("Name is ", solve("SArah"));
