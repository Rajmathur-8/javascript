

// function happyBday(){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday dear you");
//     console.log("Happy Birthday to you!");
// }

// function happyBday(username,age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}!`);
//     console.log("Happy Birthday to you!");
//     console.log(`You are ${age} years old`);
// }


// happyBday("Raj",20);
// happyBday("Spongebob",30);

function add(a,b){
    return a+b;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}


// console.log(add(6,3));
// console.log(subtract(6,3));
// console.log(multiply(6,3));
// console.log(divide(6,3));

// rest operator --> in function
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,500));

const user = {
    username: "raj",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


