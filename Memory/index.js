//Stack --> (primitive datatypes) and 
//heap -->(Non-Primitive) memory

let myYouTubeName = "Raj";//stack
let anotherName = myYouTubeName; 
anotherName = "Mathur";
console.log(myYouTubeName);
console.log(anotherName);

let userOne = {  //heap
    email : "user@gmail.com",
    upi: "user@ybl" 
}
let userTwo = userOne;

userTwo.email = "raj@google.com";
console.log(userOne);
console.log(userTwo);




