const name = "dharmaraj"
const repoCount = 50
// console.log(name + repoCount+" Value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('dharmraj-dz-com')
// console.log(gameName[8]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 7);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const newStringOne = "   dharmraj   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://dharmraj.com/dharmraj%20zine"

// console.log(url.replace('%20','-'));
// console.log(url.replace('sundar'));
// console.log(gameName.split('-'));


//charAt()
let cat = "cat".charAt(0);
// console.log(cat);

let cat2 = "cat"[1];
// console.log(cat2);

//comparing strings
const a = "b";
const b = "b";
if (a < b) {
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}

//=== ==
//toUpperCase() or toLowerCase()
function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

// console.log(areEqualCaseInsensitive("raj","raj")); 

const areEqualInUpperCase = (str1, str2) =>
    str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
    str1.toLowerCase() === str2.toLowerCase();

// console.log(areEqualInUpperCase("B","ss")); 
// console.log( areEqualInLowerCase("i","I"));

const areEqual = (str1, str2, locale = "en-US") =>
    str1.localeCompare(str2, locale, { sensitivity: "account" }) === 0;

// console.log(areEqual("B", "ss", "de"));
// console.log(areEqual("i", "I", "tr"));

//string primitives and String Objects

const strPrim = "foo";
const strPrim2 = String(1);
const strPrim3 = String(true);
const strObj = new String(strPrim);

// console.log(typeof strPrim);
// console.log(typeof strPrim2);
// console.log(typeof strPrim3);
// console.log(typeof strObj);

//string primitives and string objects also give different results when using eval().

const s1 = "2 + 2";
const s2 = new String("2 + 2");
console.log(eval(s1));
console.log(eval(s2));