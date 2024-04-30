function sayMyName() {
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("M");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("J");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
addTwoNumbers()

const result = addTwoNumbers(3,5)
// console.log("Result: ",result)

function loginUserMessage(username = "ram"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("dharmraj"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

const user ={
    username:"dharmaraj",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}

handleObject(user)

handleObject({
    username:"ram",
    prices:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]));