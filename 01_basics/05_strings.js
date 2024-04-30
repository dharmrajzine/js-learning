const name ="dharmaraj"
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

const newString = gameName.substring(0,7);
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne = "   dharmraj   ";
// console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dharmraj.com/dharmraj%20zine"

console.log(url.replace('%20','-'));
console.log(url.replace('sundar'));
console.log(gameName.split('-'));