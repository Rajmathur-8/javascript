
function hello(callback){
    console.log("hello");
    callback();
}
function goodBye(){
    console.log("Good Bye");
}
function leave(){
    console.log("leave");
}
function wait(){
    console.log("wait");
}
 
hello(goodBye);
hello(leave);
hello(wait);

function sum(callback,x,y){
    let result = x +y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}

sum(displayPage,5,9);

function displayPage(result){
    document.getElementById("myh1").textContent = result;
}








