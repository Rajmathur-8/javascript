// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);
// console.log(cubes);



// function square(element){
//     return Math.pow(element,2);
// }
// function cube(element){
//     return Math.pow(element,3);
// }

// const students = ["Spongebob","Patrik","Squidward","Sandy"];


// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
// console.log(studentsLower);

// function upperCase(element){
//     return element.toUpperCase();
// }
// function lowerCase(element){
//     return element.toLowerCase();
// }

const dates = ["2024-12-11","2023-2-12","2018-10-12","2023-04-15"];

const formatedDates = dates.map(formateDates);
console.log(formatedDates);

function formateDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}



