//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//note:++the scope in browser is different and the global scope in our terminal or in our editor(node) is different(when we use it to check our code)

//++++++++ next Video ++++++++++++
/*example of child parent ice cream */

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //you can access the parent scope or parent variable in child function
    }
    // console.log(website); //but you can't access the child scope or variable in Parent function

    two()

}

// one()

//next example:same as above child parent example , what you can access inside scope and what you can't access

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //can't access
}

// console.log(username); //can't access


// ++++++++++++++++++ interesting ++++++++++++++++++
/*techniques how function is created/declare in JS,
 normal function creation/declaration and one is when Function is created and then hold in a variable. */

console.log(addone(5)) //this is run successfully,due to normal function declaration and concept of Hoisting(which we will discuss further in future)
//basic function definition
function addone(num){
    return num + 1
}



addTwo(5) //shows error, bcz of function declaration and hold in variable which shows as error (because of hoisting,which we will discuss further in future) 

//function which is stored in the variable(also known as expression sometimes)
const addTwo = function(num){
    return num + 2
}

/* Note: variables are very strong in JS they can hold anything like JSON Values,Function etc  */