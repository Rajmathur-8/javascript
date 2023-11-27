let username = "Raj Mathur";

console.log(username.charAt(0));
console.log(username.indexOf("a"));
console.log(username.lastIndexOf("a"));
console.log(username.length);
username = username.trim();
console.log(username);
console.log(username.toUpperCase());
let result = username.includes(" ");
if(result){
    console.log("Your username can't include ' '");
}else{
    console.log(username);
}


