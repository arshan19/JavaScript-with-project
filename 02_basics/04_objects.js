// const tinderUser = new Object() //using constructor which create singleton instance
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//nested object , object within nested object
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //merge two objects,but give result in object 
//const obj3 = Object.assign({}, obj1, obj2, obj4) 
//merge two objects, where first object property is target , and all other are source ,note:we taken {} bracket here to store all the value of object here , as it became target object , whereas onj1,obj2,obj4 are sources here, which merge into this empty object and give result in object (use in production code)

const obj3 = {...obj1, ...obj2} //using spread operator
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //do this beacuse here user is an array first then we put . operator and search for object properties or value there.
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //shows results as true


/* next video */

//DeStructing of an object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//can give name to destructured object here which is "courseInstructor" to name it as "instructor" as well
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//API's In json format :Note:both of these below are JSON format


{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

//Api can also come in this format as well like array in which we more array and more objects like nested and everything

[
    {},
    {},
    {}
]