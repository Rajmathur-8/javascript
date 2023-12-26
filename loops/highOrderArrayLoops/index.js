//  for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(greet);
}

//maps

const map = new Map()
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('JP',"Japan");

//console.log(map);

for (const [key,value] of map) {
   // console.log(key, ':-' , value)
}

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
// for (const [key,value] of myObj) {
//     console.log(key,':-',value)  // forof loop is not used for objects
// }

//forin loop

for (const key in myObj) {
  // console.log(myObj[key]);
}

for (const key in arr) {
  // console.log(arr[key]);
}


//for each loops
const coding = ["js","ruby","java","python","cpp"]

coding.forEach( val => {
   // console.log(val);
});

function printMe(item) {
    console.log(item);
}

//coding.forEach(printMe)


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})
