const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age>100){
        // console.log("You are too old to enter this site");
        // console.log("You are too old to enter this site");
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age>=18){
       // console.log("You are old enough to enter this site");
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age<0){
       // console.log("Invalid age");
        resultElement.textContent = `Invalid age`;
    }
    else{
        console.log("You must be 18+ to enter this site");
        resultElement.textContent = `You must be 18+ to enter this site`;
    }

}




// let isStudent = false;
// if(isStudent){
//     console.log("you are a student");
// }else{
//     console.log("Not a student");
// }

//can also create nested if-else statement

