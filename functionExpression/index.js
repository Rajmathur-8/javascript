
// const hello = function(){
//     console.log("Hello");
// }
// hello();

setTimeout(function(){
    console.log("Hello");
},3000);


const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element,3);
});

console.log(cubes);

const evens = numbers.filter(function(element){
    return element%2===0;
});

console.log(evens);

const odds = numbers.filter(function(element){
    return element%2!==0;
});

console.log(odds);

const total = numbers.reduce(function(accumulator,element){
    return accumulator+element;
});

console.log(total);



