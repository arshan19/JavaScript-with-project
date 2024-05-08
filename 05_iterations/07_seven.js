/** Map : it will iterate all over the loop and return whole loop acc to condition 
 * unlike filter which return only the true condition */

const myNumbers = [1,2,3,4,5,6,7,8,9]

const checkMapNum = myNumbers.map( (itemNum )=> { return itemNum + 5 } )
//console.log(checkMapNum);



/*implement ForEach loop on the same example of map above and got the same result. */

// const checkForEach = []

// myNumbers.forEach((item)=>{
//     checkForEach.push(item + 5)
// })

// console.log(checkForEach);


/************ CHAINING : we can use two,three or any method one after another on same object and chain them one after another *********************/
//we can chain any as method we want 

const myNewNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNewNumbers
                            .map( (num) => num * 10 ) 
                            .map( (num) => num + 2 )
                            .filter( (num) => num >= 30)

console.log(newNums);


//note :  filter is a true/false value game and return the condition when we find it true
//whereas Maps is  returning everything acc to our performing operations .