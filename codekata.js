// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function uppercaseNum(word) {
    const splitWord = word.split("");

    let uppercaseNumber = 0;
    for (let i = 0; i < word.length; i++) {
        const letterBeingChecked = splitWord[i];
        const letterFound = letterBeingChecked.match(/[A-Z]/g);

        if (letterFound) {
            uppercaseNumber++;
        }
    }

    return uppercaseNumber
}

function solve(word) {
    const uppercaseNumber = uppercaseNum(word)

    const lowercaseNumber = word.length - uppercaseNumber;
    const newWord = lowercaseNumber >= uppercaseNumber ? word.toLowerCase() : word.toUpperCase();

    return newWord;
};

console.log("Name is ", solve("SArah"));