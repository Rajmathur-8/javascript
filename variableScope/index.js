
// let x =1; //here x --> global variable

//let x= 2 --> can't declare it again as identifier x is already declared.

function fn1(){
    let x = 1;
    console.log(x);
}

function fn2(){
  //  let x=2;  // we can declare the same identifer in different fn as it scope is limited to function(local);
    let y=4;
    console.log(y); // we can't print x as it has local scope to fn1 only
}

fn1();
fn2()

