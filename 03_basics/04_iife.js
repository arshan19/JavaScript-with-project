// Immediately Invoked Function Expressions (IIFE)

//syntax of iife functions : (function name(){}) () 
//here we use to gather function inside a parenthesis() and execute our function then immediately call that function using the same () parenthesis. 
(function coffee(){
    //named IIFE
    console.log(`DB connetced`);
})();
//here we use two iife function one after another we need to use ; semicolon in btw otherwise it shows an error because it doesn't know where to end the function , so it end the function when we put ; semicolon.
( (name)=>{
    //simple IIFE
    console.log(`DB connected To ${name}`);
})("arshan")


/*why we write iife : when we write a function then we need execute it immediately
  and want our iife function not poluted by global scope bcz we sometimes have some problem 
  with global scope pollution or bcz of same values that's why we use iffe function 
  ()() , here in first parenthesis() we write function defenation and in second parenthesis() we execute them.
 two main reasons: 1.executed immediatedly 2.not polute by global scope
*/
