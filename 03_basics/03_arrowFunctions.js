const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//this refers to current context or vailable.
        //this refers to context of this current scope of the User object here
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // here current context we find by using 'this' keyword which refers to empty object {} in node environment.
/*whereas when we use this keyword in the browser, it refers to window object
  because in the browser global object is WINDOW object ***interview question */

// +++++++++++++++++++++++++++++++++++++++++++

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //here it give value as undefined bcz we can also refer to this keyword in object not in function
        /*here in function 'this' KEYWORD GIVE  multiple values or operation extra in function node env. 
        so we can use that in future DOM manipulation etc  */
// }

// chai()

//previous way of declare function
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); //here in arrow funtion this refers to empty object.
}
// chai()

/*explicit return method*/

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/* implicit return method (use for one line return arrow function)*/

// if we use {} then we need to use return keyword whereas, when we use () we don't need return keyword to return some values //example of this we use in filter in file 05_iterations/06_Six.js
// const addTwo = (num1, num2) =>  num1 + num2 
// const addTwo = (num1, num2) => ( num1 + num2 )

//how to use object
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()