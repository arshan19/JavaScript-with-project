// for

/* -----------------for loop execution and how it works--------------------

1. the let i = 0  will execute and then (note: it will execute only once ,like the starting)
2. i <= 10 which check for is i is less than 10 if true then it will go inside the blocked scope exwcution
3. then it will go inside the scope and execute whatever the condition we apply
    const element = i;
    console.log(element);
    
4.then after the condition it will back to looping statement and execute the last part which i++ here
means the iteration will move to the next iteration and then after that 
5.it will check for i <= 10 condtion once more and execute the like previous condition
6.when this i <= 10 condtion became false it stops the iteration and cameout of the loop


++++++ short explanation ++++++++++
1.let i = 0
2.i <= 10
3.const element = i;
  console.log(element);
4.i++ ;
5.again check for condtion i <= 10 
6.until i <= 10 became false

*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);  
}

// console.log(element);//this doesn't call because of Scope


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

/* ----------------------------- diff btwn Break and Continue --------------------------------
    Break will stop the loop and stops the execution and came out of the control flow of loop when called
    while Continue doesn't came out the loop but just stop the iteration for one time or according to the condition
    we give to continue and after that condition it still run over the full loop 
    whereas when break is called one time or in any condtion fullfied it will break the loop and came out of the
    loop as well
*/


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}