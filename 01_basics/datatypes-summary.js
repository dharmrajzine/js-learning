// Primitive

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber = 1312412487218742182193n

//Reference (Non Primitive)

//Array, Objects, Functions

const heros =["shaktiman","naagraj","dosa"];
let myObj = {
    name:"dharmraj",
    age:22,
}
console.log(myObj)

const myFunction =function(){
    console.log("Hello world");
}
myFunction();

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3