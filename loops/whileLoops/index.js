// let username = "";
//do while loop

// do{
//     username=window.prompt(`Enter your name`);
// }
// while(username==="" || username===null)
//     console.log(`Hello ${username}`);


//while loop


// while(username==="" || username===null){
//     username=window.prompt(`Enter your name`);
// }
//     console.log(`Hello ${username}`);


let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username==="myUserName" && password==="myPassword"){
      loggedIn=true;
      console.log("you are logged in!");
    }else{
        console.log("Invalid credentails! Please Try again")
    }
}