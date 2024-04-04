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

/*
++++++++++++++++ How javascript works ++++++++++++++

The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
The return value of the 'Function Execution' context is passed to the Global Execution Context

++++++++++ another way of explanation +++++++++++++++++++

1.JS creates Global excution context 
2.Next it creates memory phase
3.Memory phase - In this phase,the variables are set to undefined 
  until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the execution phase
5.Execution phase - In this phase,the variables are initialsed to given values and 
  when the function s are called,it creates a memory phase and execution phase for the function 
  just like the main one.

For live demo:
browser > inspect > Sources
create a snippet with few functions and visually experience the call stack.

*/