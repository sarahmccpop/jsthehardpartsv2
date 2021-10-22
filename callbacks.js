// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num+2
}

const multiplyByTwo = (num) => num*2;


// To check if you've completed it, uncomment these console.logs!
console.log("Challenge 1: " + addTwo(3));
console.log("Challenge 1: " + addTwo(10));


const addThree = input => input+3
const addedThree = addThree(30);
console.log("Adding three: " +addThree(10) + " and added three is " + addedThree)


// Challenge 2
function addS(word) {
 	return word+"S"
}

// uncomment these to check your work
console.log("Challenge 2: " + addS('pizza'));
console.log("Challenge 2: " + addS('bagel'));
console.log("Challenge 2: " + addS('2'));


// Challenge 3
// Will calls this function copyArrayAndManipulate in his talk, but it is referred to often as map
function map(array, callback) {
  // firstly map creates a new array
  const output = [];
  // then it takes the first element in the array and manipulates is as per the callback meethod instructions
 for (let i = 0; i < array.length; i++){
   // pushes the manipulated figure (of the first element of the array) and pushes it to first index of the NEW array
   output.push(callback(array[i]));
   // and repeats this process until every element in the original array has been manipulated 
 }
  // the NEW array is returned
  return output;
}

console.log("Challenge 3: " +  map([1, 2, 3], addTwo));
console.log("Challenge 3 (muliplying by 2): " +  map([1, 2, 3], multiplyByTwo));
//console.log(map[1, 2, 3], addS));


// Challenge 4
function forEach(array, callback){
  for (let elem of array) {
    callback(elem);
  }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'


// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
  let output = [];

  forEach(array, function(elem) {
    output.push(callback(elem));
  });

  return output;
}

// Test it:
console.log("Challenge 5: " + mapWith([1, 2, 3], addTwo));


// Challenge 6
// reduce is *the* most versatile higher order function of all 
// Takes a mental shift to look at problems through the reduce lens 
// Can even enable function composition 
// map function is reduction in action as we take a number and an empty array (2 things) and push them into ONE thing - 1 array, which contains a number, but is still just one array
// map is shorthand for mapReduce !! 
// reduction is from 2 things to one thing

// We want to write our function so that it could handle 
// - any 'accumulator' = (array, string or number)
// - any combining logic/code/functionality (the 'reducer')

// reduce should be called reduce from two things to one repeatedly inside itself			
const reduceWills = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++){
    buildingUp = howToCombine(buildingUp, array[i])
  }
  return buildingUp;
}

const addWills = (a, b) => a+b;
const minusWills = (a, b) => a-b;
const summed = reduceWills([1,2,3], addWills, 0)
const summed2 = reduceWills([3,2,1], minusWills, 10)
console.log("Summed is: " + summed);
console.log("Summed2 is: " + summed2);
// the output of summed two has showed me that buildingUp is a and 

// JS has a built-in version of reduce, the array is inserted into the reduce function automatically as the first input/argument - they produce the same result

const addB = (a, b) => a +b
const summedB = [1,2,3].reduce(addB, 0)
console.log("Summed B: " + summedB)


// reduce function code I found online 
function reduce(array, callback, initialValue) {
  for (let elem of array){
    initialValue = callback(initialValue, elem);
  }

  return initialValue;
}

const nums = [4, 1, 3];
const add = function(a, b) {
  return a + b; 
}
console.log("Challenge 6: " +reduce(nums, add, 0));
console.log("Challenge 6: " +reduce(nums, add, 1));
console.log("Challenge 6c: " + reduce([4, 1, 3], addTwo, 1))


const myarray = [1,2,3,4,5,6]
const greaterThan2 = num => num > 2
const filteredArray = myarray.filter(greaterThan2)
console.log("Filtered array is: " + filteredArray);
// we can combine or CHAIN these higer order functions
console.log("If we add 3 + 4 + 5 + 6....");
console.log("Reduced filtered array: " + myarray.filter(greaterThan2).reduce(addB,0));


// Function Composition with Reduce 
const multiplyBy2 = x => x*2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;

const reduceB = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++){
    buildingUp = howToCombine(buildingUp, array[i])
  }
  return buildingUp;
}

const runFunctionOnInput = (input, fn) => {
  return fn(input)
}

const output = reduceB([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11)
console.log("Output of reduce and 3 functions is: " + output);


// Challenge 7

// my attempt 

const runFunction = (a, b) => {
  const emptyArray = [];
  for (let i = 0; i < b.length; i ++){
        if (a.indexOf[i] > -1) {
          emptyArray.push(b[i]);
        }
      } // end of for loop
  return emptyArray;
  console.log("Empty array: " + emptyArray);
    }

const reduceMe = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++){
    buildingUp = howToCombine(buildingUp, array[i])
  }
  return buildingUp;
}

const myintersection = reduceMe([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20], runFunction, [])
console.log("My intersection: " + myintersection);


//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript
function intersection(...arrays) {
  return reduce(
    arrays,
    (a, b) => {
      let result = [];
      for (let elem of b) {
        if (a.indexOf(elem) > -1) {
          result.push(elem);
        }
      }
      return result;
    },
    arrays[0]
  );
}

function intersection2(...arrays){
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}

console.log("Challenge 7: " + intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
console.log("Challenge 7b: " + intersection2([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
function union(...arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {

}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {

}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/*
// Challenge 13
function prioritize(array, callback) {

}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: 
/* ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {

}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
/*function groupBy(array, callback) {

}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
/*function goodKeys(obj, callback) {

}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
/*function commutative(func1, func2, value) {

}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
/*function objFilter(obj, callback) {

}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
/*function rating(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
/*function pipe(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
/*function highestFunc(objOfFuncs, subject) {

}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
/*function combineOperations(startVal, arrOfFuncs) {

}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
/*function myFunc(array, callback) {

}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
/*function myForEach(array, callback) {

}

let sum = 0;

function addToSum(num) {
  sum += num;
}


// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6