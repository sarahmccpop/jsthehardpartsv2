/*const user1 = {
    // key: value
    // or propertyname : propertyvalue
    name: "Will",
    score: 3,
    increment: function() {user1.score++;}
};

user1.increment();
console.log(user1.name+"'s score is " +user1.score)


// use the dot notation to add properties to an empty object after creation
const user2 = {}; // create an empty object
// a function on an object is called a method

user2.name = "Tim";
user2.score = 6;
user2.increment = function(){
    user2.score++;
};

// Using Object.create to create an EMPTY object
// even if you pass in something instead of null, it will always return an empty object
const user3 = Object.create(null);
user3.name="Eva";
user3.score=9;
user3.increment= function() {
    user3.score++;
};

// This breaks DRY so solution 1 generate objects using a function
function userCreator1(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    };
    return newUser;
};

const userA = userCreator1("Sarah", 3);
const userB = userCreator1("Sean", 5);
userA.increment()
console.log(userA.score)
// problem with this option is that we're storing the same function twice 
// also if we wanted to add a new feature, we'd have to add it to every user

// Solution 2 : using the prototype chain
function userCreator2 (name, score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

// this is an object with the function to increment 
const userFunctionStore = {
    // increment method
    increment: function(){this.score++;},
    login: function(){console.log("Logged in");}
};

const userC = userCreator2("John", 3);
const userD = userCreator2("Paul", 5);
userC.increment();
// there is a hidden property on newUser __proto__ 
// so each user has a __proto__ link to userFunctionStore
// prototypal feature of js which 

console.log("User C's score is ", userC.score)
console.log(userC);

// hasOwnProperty method 
function userCreator3 (name, score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function(){this.score++},
    login: function(){console.log("Logged in");}
};

const userE = userCreator3("Will", 13 );
const userF = userCreator3("Dee", 2);
userE.hasOwnProperty('score');

// hasOwnProperty comes from Object.prototype 


function userCreator4(name, score){  
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function(){
    // using arrow function ensures that the assignment of this is statically or lexically scope    
    // so this. remains local here, not global
    const add1 = () => {this.score++};
    add1()    
    }
};

const userG = userCreator4("Barney", 3);
const userH = userCreator4("Bill", 5);
userG.increment();
console.log(userG);
*/
//  SOLUTION 3 
// the new keyword automates a lot of our manual work
function userCreator5(name, score){
    this.name = name;
    this.score = score;
}
userCreator5.prototype
userCreator5.prototype.increment = function(){
    this.score++;
}
userCreator5.prototype.login = function() {console.log("login");};


// the new keyword means the this is auto-returned 
const userI = new userCreator5("Sarah", 5);
userI.increment();
console.log("UserI's details: ", userI);


// interlude
function multiplyBy2(num){
    return num*2;
}
multiplyBy2.stored = 5; // stored on property name stored
console.log(multiplyBy2(3)); // 6
console.log(multiplyBy2.stored) // 5
console.log(multiplyBy2.prototype) // {}
// we could use the fact that all functions have a default property 'prototype' on the object version, 
// (itself an object) - to replace our 'functionStore' object
// All function in their object format automatically have a property on them called prototype
// Prototype is an empty object (can be seen in console.log)

// Synatactic sugar - changes how something looks but not how it works under the hood 


// a class is a function object combo
// this makes it look more like other languages
class UserCreator {
    // constructor is the name of the function now
    constructor (name, score){
        this.name = name;
        this.score = score;
    }
    increment () { this.score++; }
    login () { console.log("login"); }
}


const userX = new UserCreator("Aoife",9);
console.log(userX);
userX.increment();
console.log(userX);