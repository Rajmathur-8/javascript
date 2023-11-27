

// const fullName = "Raj Mathur";
// let firstName = fullName.slice(0,3);  // .slice(inclusive index,exclusive index)
// console.log(firstName);
// let lastName = fullName.slice(4,10);
// console.log(lastName);

const email = "raj@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);

