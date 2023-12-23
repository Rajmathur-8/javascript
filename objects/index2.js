
//const user = new Object()

const user ={}
   user.id="123abc"
   user.name = "Sammy"
   user.isLoggedIn = false

//console.log(user);

const regularUser = {
    email: "someone@gmai.com",
    fullName: {
        userFullName: {
            firstName: "Raj",
            lastName: "Mathur"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj3 = { 5: "e", 6: "f"}
// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2,...obj3}

//console.log(obj3)
//console.log(obj4)


// console.log(user)

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


const course = {
    courseName : "js",
    price : "999",
    CourseInstructor : "abc"
}

//course.CourseInstructor
const {CourseInstructor:Instructor} = course
console.log(Instructor);

// {
//     "name" : "abc"
//     "courseName" : "js",
//     "price" : "Free",
// }

// above and below is json code/api
[
    {},
    {},
    {}
]

