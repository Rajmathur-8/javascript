//rest is opposite of spread operator 

// function openFridge(...foods){
//     console.log(foods); //used as rest parameter
//     console.log(...foods); //used as spread operator
// }


// const food1 ="Pizza";
// const food2 ="Hamburger";
// const food3 ="Hotdog";
// const food4 ="Sushi";
// const food5 ="Pasta";

// openFridge(food1,food2,food3,food4,food5);

function sum(...numbers){
    let res=0;
    for(let number of numbers){
        res += number;
    }
    return res;
}

const total =sum(1,2,3,4,5,6,7,8,9);
console.log(`your total is ${total}`);


function getAverage(...numbers){
    let res=0;
    for(let number of numbers){
        res += number;
    }
    return res/numbers.length;
}
const total2 = getAverage(5,8,7,3,6,2,8,1,3);
console.log(`your average is ${total2}`);

function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr. ","Spongebob","Squarepants");
console.log(fullName);


