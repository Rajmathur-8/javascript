// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate));

let myCreatedDate = new Date(2023,11,23);
let myCreatedDate2 = new Date(2023,11,23,5,3);
let myCreatedDate3 = new Date("2023-01-14");
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate2.toLocaleString())
// console.log(myCreatedDate3.toLocaleString())


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());// value in msec
console.log(Math.floor(Date.now()/1000));//value in secs

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)


console.log(newDate.toLocaleString('default',{ 
    weekday: "long"
}))


