/**** Reduce :use to add given number
 * at first accumulator contain value which is given by us i.e, 0 here which we give after function declaration & execution
 * and then accumulator contain the sum of acc and currentValue , and then one after another until the loop ends
 * REDUCE is used when we want to add something like adding the value in USER CART like add there total so don't need to put loop by yourself ,u can use reduce there.
  */

const myNums = [1 , 2 , 3]

//normal function
const resNums = myNums.reduce( function (accumulator, currentValue) {
    console.log(`Value of accumulator : ${accumulator} and value of CurrentValue : ${currentValue}`);
    return accumulator + currentValue
},0)  
/**here 0 is starting value of accumulator , u can set it according to ur need */

console.log(resNums);

//arrow function

const resNums2 = myNums.reduce ( (acc,currVal)=> acc+currVal ,0)
console.log(resNums2);


/**another example or usecase where we can use reduce */

const shoppingCart = [ 
    {
        itemName: "Microwave",
        price: 2999  
    },
    {
        itemName: "A.C.",
        price: 22999
    },
    {
        itemName: "Mobile",
        price: 11999
    }
]

const finalPriceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0 )

console.log(finalPriceToPay);