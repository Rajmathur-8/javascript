// let num = [1,2,3,4,5];


// num.forEach(double);
// num.forEach(display);
// num.forEach(triple);
// num.forEach(display);
// num.forEach(square);
// num.forEach(display);
// num.forEach(cube);
// num.forEach(display);



// function double(element,index,array){
//     array[index]=element*2;
// }

// function triple(element,index,array){
//     array[index]=element*3;
// }

// function square(element,index,array){
//     array[index]=element*element;
// }
// function cube(element,index,array){
//     array[index]=Math.pow(element,3);
// }

// function display(element){
//     console.log(element);
// }


let fruits =["apple","orange","banana","coconut" ];

// fruits.forEach(uppercase);
// fruits.forEach(lowercase);
fruits.forEach(capitalize);
fruits.forEach(display);

function uppercase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowercase(element,index,array){
    array[index] = element.toLowerCase();
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}









