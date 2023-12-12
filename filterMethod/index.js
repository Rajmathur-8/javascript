

// let numbers = [1,2,3,4,5,6,7];

// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);
// console.log(oddNums);

// function isEven(element){
//     return element%2===0;
// }
// function isOdd(element){
//     return element%2!==0;
// }

// const ages = [16,17,18,19,20,50];

// const adults = ages.filter(isAdult);
// console.log(adults);

// function isAdult(element){
//     return (element>=18 && element<24);
// }

const words = ["apple","orange","banana","Kiwi","pomegranate","coconut"];

const shorts = words.filter(getShorts);
const longs = words.filter(getLong);
console.log(longs);

function getShorts(element){
    return element.length <= 6;
}
function getLong(element){
    return element.length > 6;
}
