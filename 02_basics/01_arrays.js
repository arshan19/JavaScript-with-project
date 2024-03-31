// array
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//refrence to stack and heap video

//++++++++++++++++declare an array++++++++++++
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr2[1]); //answer:2 , get the second elemnt from array

// ++++++++++++++Array methods+++++++++++++

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)//insert at start of array
myArr.shift() //remove at start of array

console.log(myArr.includes(9)); //RETURN in true/false (Boolean type) 
console.log(myArr.indexOf(3)); //answer : 3 , fourth elemnt in myArr

const newArr = myArr.join() //convert the array to string (also bind it)

console.log(myArr);
console.log( newArr);


// +++++++++++slice , splice+++++++++++++++++
/*remember Array Start from 0th position */
const arrTocheck = [0, 1, 2, 3, 4, 5]
console.log("A ", arrTocheck);

const mynew1 = arrTocheck.slice(1, 3) //it do not manipulate the original array and return just the copy of that array with slice method which not include the last element,so answer is : [1,2] from 1st position upto 2nd position ,it doesn't include the given 3rd element 

console.log(mynew1);
console.log("B ", arrTocheck);


const myn2 = arrTocheck.splice(1,3) //manipute the original array and return the remove part from the array, answer : [1,2,3] from 1st position upto 3rd position
console.log("C ", arrTocheck);
console.log(myn2);