const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //4:remove the negative sign
console.log(Math.round(4.6)); //5:roundoff the value to nearest integer
console.log(Math.ceil(4.2)); //5:roundoff the value to greater integer(ceiling: as we all know TOP )
console.log(Math.floor(4.9)); //4:roundoff the value to least integer (floor: as we all know DOWN )
console.log(Math.min(4, 3, 6, 8)); //3:minimum value found
console.log(Math.max(4, 3, 6, 8)); //8:maximum value found

console.log(Math.random()); //random number between 0 and 1
console.log((Math.random()*10) + 1); //make number multiple to 10 beacuse we always do not need number btw 0 and 1 ,it will give number between 1 to 10(we can also multiply it with 10 or 100 as well) , we add +1 here , because it can give value to 0 as well for making this value positive we use + 1 here
console.log(Math.floor(Math.random()*10) + 1); //to remove the after decimal value we use Math.floor here

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//as we ge value from this formula Math.random() * (max - min + 1) as between 0 to 10  or we get value less than 10 ,
//so , for we have min value =10  so we dd the value in our result so ,it reside between 10 and 20