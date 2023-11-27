
// creates a random number between 1 - 6

// let randomNum =Math.floor(Math.random()*6)+1;

// console.log(randomNum);

//for random number btw range suppose 50-100

// const min=50;
// const max = 100;

// let randomNo = Math.floor(Math.random()*(max-min))+min;
// console.log(randomNo);

//Random number generator

const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min =1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick=function(){
    randomNum1 =Math.floor(Math.random()*max)+min;
    randomNum2 =Math.floor(Math.random()*max)+min;
    randomNum3 =Math.floor(Math.random()*max)+min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
