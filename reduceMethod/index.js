const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator,element){
    return accumulator + element;
}


const grades = [75,80,50,97,65,70];

const maximum = grades.reduce(getMax);
console.log(maximum);

const minimum = grades.reduce(getMin);
console.log(minimum);

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
}