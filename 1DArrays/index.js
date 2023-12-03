//Arrays

let fruits = ["apple","orange","banana"];

fruits[3] = "coconut";
fruits.push("guava");

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

fruits.pop();
console.log(fruits[4]);

fruits.unshift("mango");
console.log(fruits);

fruits.shift();
console.log(fruits);

let num = fruits.length;
let index = fruits.indexOf("apple");
let index1 = fruits.indexOf("guava");
console.log(num);
console.log(index);
console.log(index1);

//Normal for loop

// for(let i = fruits.length-1;i>=0;i--){
//     console.log(fruits[i]);
// }

fruits.sort().reverse();

//Enhanced For Loop

for(let fruit of fruits){
    console.log(fruit);
}
