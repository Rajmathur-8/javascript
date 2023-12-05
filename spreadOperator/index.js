

let numbers = [ 1,2,3,4,5,6];

console.log(numbers);

let max = Math.max(...numbers); // (...)->spread operator - unpacks the elements 
console.log(max);

let min = Math.min(...numbers); // (...)->spread operator - unpacks the elements 
console.log(min);

let username = "Raj Mathur";
let letterArray = [...username];
let letters = [...username].join("-");

console.log(letterArray);
console.log(letters);


let fruits = ["apple", "orange","banana"];
let veg = ["carrots","tomatoes","potatoes"];
let foods = [...fruits, ...veg];

console.log(fruits);
console.log(foods);


