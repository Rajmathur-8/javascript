const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Raj",email:"raj@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log((user));
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userame:"RAJ",password:"QWERTY" })
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
 promiseFour.
 then((user) => {
    console.log(user);
    return user.userame
}).
then((username) =>{
    console.log(username);
}).
catch((e) => {
    console.log(e);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({userame: "Rajan",password:"456"})
        }else{
            reject('ERROR: JS WENT WRONG')
        }
    },1000)
})
async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
 }
 consumePromiseFive()


