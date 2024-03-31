//object can declare by two type : object literal and constructor

// singleton => when create object using constructor a singleton object is create
// Object.create (this is how we create object with constructor and in this singleton object is created)


//when we declare object through literals then singleton object is not created

/* object literals */

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//this is the way to use symbol as a key in object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//ways to excess value in object
// console.log(JsUser.email) //1.one common way
// console.log(JsUser["email"]) //2.another way
// console.log(JsUser["full name"]) //only excess the value by this way, you can't excess this using dot(.) method of access objects values
// console.log(JsUser[mySym]) //only excess by this way

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());