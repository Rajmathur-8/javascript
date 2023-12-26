const user ={
    username: "Raj",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    // console.log(this);
    }
}

 //user.welcomeMessage()

// console.log(this);

// function chai() {
//     console.log(this);
// }

// chai()

// const chai = () => {
//     let username = "Raj"
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2) => (num1,num2){
//     return num1+num2          //explicit return
// }


//const addTwo = (num1,num2) =>  num1+num2  //implicit return
//const addTwo = (num1,num2) =>  (num1+num2)
const addTwo = (num1,num2) =>  ({username: "Raj"})
console.log(addTwo(3,4));


//+++++++++++++++++++Immediately Invoked Function Expressions (IIFE)+++++++++++++++++++++++++++++++

// function chai() {
//     console.log(`DB Connected`); 
// }
// chai()  // normal invokation

(function chai() {
         console.log(`DB Connected`); 
     })();       //IIFE

(   (name)=> {
        console.log(`DB CONNECTED TWO ${name}`);
} ) ('Raj')

