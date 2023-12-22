//singleton --> when not declared as literals
//   Object.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Raj",
    [mySym] : "myKey1",
    age: 19,
    location: "Patna",
    email: "raj@gmail.com",
    isLoginDays: ["Monday","Saturday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "raaz@gmail.com"
Object.freeze(Jsuser)
Jsuser.email = "raaj@gmail.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}
    // console.log(Jsuser.greeting());