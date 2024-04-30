//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dharmraj",
    "full name": "Dharmraj Zine",
    [mySym]: "myKey1",
    age: 28,
    location: "Maharashtra",
    email: "dharmrajzine@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email="dharmrajzine@gmail.com"
// Object.freeze(JsUser)
JsUser.email="dharmrajzine@hdfc.com"
// console.log(JsUser)

JsUser.greeding = function(){
    console.log("Hello JS user");
}
JsUser.greedingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeding())
console.log(JsUser.greedingTwo())