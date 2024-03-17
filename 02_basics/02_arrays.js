const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); 

/*get data as Array in Array format
answer: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] */

console.log(marvel_heros[3][1]); 
//ans:flash, which is not good so we use concat for getting the array added with other array , not the array nesting here 

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); 
//but this is not the best practise , mostly developer use spread operator to connect multiple arrays.


//example of breaking the glass and spread into pieces, so this is same with spread operator it will break and spread the elements together
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
/*it will flatten the array and make it one, like remove nested array in array, it will take depth which we take infinity here , but will use upto 2 level,3 level, we can use it like this as well: another_array.flat(3) */ 

console.log(real_another_array);

//+++++++++Select the array, covert the array,etc.++++++ 

console.log(Array.isArray("Hitesh")) // returns false

//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("Hitesh"))//convert it into array
console.log(Array.from({name: "hitesh"})) //interesting ,ans: [], because you have to give it , what array we want to make , like key value pairs or anything like that{learn it more further when we make a project in future}

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //add all the scores to the array