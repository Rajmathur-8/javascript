//type conversion

// let age = window.prompt("How old are you");
// age = Number(age);
// age +=1;
// console.log(age);

// console.log(age,typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y= String(y);
// z= Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);


// constants

const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt('Enter the radius of circle');
//radius = Number(radius);

// PI = 40.864; --> can't change value as declared constant :D

// circumference = 2*PI*radius;

// console.log(circumference);

document.getElementById("mySubmit").onclick = function(){
  radius =  document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2*PI*radius;
   document.getElementById("myH3").textContent = circumference;

}