// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

// reading on radix
// https://en.wikipedia.org/wiki/Radix
// how to convert int to binary - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// how to convert binary to int - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

const binaryRadix = 2;

function binaryFromAdditionOfTwoInts(a, b) {
  sum = a + b;
  // 2 after toString converts the number operated on to bin
  return sum.toString(binaryRadix);
}

function binaryToInt(binary) {
  return parseInt(binary, 2);
}

console.log("Binary to int: ", binaryToInt(11, 2));
console.log("Total in binary: ", binaryFromAdditionOfTwoInts(3, 9));
console.log("Total in binary: ", binaryFromAdditionOfTwoInts(10, 6));
console.log("Total in binary: ", binaryFromAdditionOfTwoInts(51, 12));
