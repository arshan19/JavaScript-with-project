
function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("S"); /* This all is **function defination** Function then function ka naam then bracket() and then parenthesis , where we write what function will execute  */
    console.log("H");
    console.log("A");
    console.log("N");
}

/*just sayMyName is a function reference (W/O Parenthesis,i.e,this doesn't execute the function or return us anything) and 
when we add () parenthesis after function defination like this -> sayMyName()
 then it will became function Execution */
 // sayMyName()

 /* here when we pass any value in function defination like below 
 addTwoNumbers(number1, number2) here number1,number2 is **parameter**.
 and when we pass the value in function calling or function Execution then
 it will be called as **Arguments** ,addTwoNumbers(3,4). here 3 and 4 are arguments 
 whereas number1 and number2 is parameter at the start of function or in function defination
 Note: These PARAMETER AND ARGUMENTS ARE JUST NAME, THIS DOESN'T EFFECT ANYTHING OR CHANGE ANYTHING */
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

/*
 return ka matlb hai function se aapne kya value wapas bheji hai.
 jbki console sirf console print karega return kuch nhi karega, 
 return apne aap me ek concept hai
 AFTER we use RETURN KEYWORD NOTHING WILL EXECUTE IN FUNCTION
 */
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2

    //console.log("Arshan") //doesn't return anything(explan above)
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

/* ++++++ next video ++++++ */

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399,
    dob: "123", //we got nothing in o/p related to dob because we don't call it
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));