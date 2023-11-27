// 1 --> using window prompt

// let username;
// username = window.prompt("What's your name?");
// console.log(username);

// 2--> html textbox

let username;

document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myText").value;
document.getElementById("myh1").textContent = `Hello ${username}`
}