
let a = 40; // global scope
if(true){
    let a = 10;     //
    const b = 20;  //block scope
 var c = 30;   //
    //console.log("Inner:",a );
}


//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "Raj"

    function two() {
        const website = "youTube"
        console.log(username);
    }
   // console.log(website);
    two();
}
one();

console.log(addOne(5));
function addOne(num) {
    return num+1
}


const addTwo = function(num){   //function expression
    return num+2
}
console.log(addTwo(5));


