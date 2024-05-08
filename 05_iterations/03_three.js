// for of

// ["", "", ""]
// [{}, {}, {}]
//note: here we don't need to define the array length or from where we starting or loop and where to end , it does it automatically as well in these loops we discuss further on
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " "){
        continue;  //use to eleminate extra-space , if we want to exit our loop after extra-space then we can use break;
    }
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() //map is like object as mostly everythink in JS is Object , but maps have unique keys
map.set('IN', "india")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //unique values, doesn't became duplicate 


// console.log(map);

for (const [key,value] of map) {     // we can iterate in maps using [] square bracket and then destructure the keys,values of maps accordingly
     console.log(key,"->",value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); //shows an error , which solve in next file using FOR IN loop
}

/**here object are not iterable through forof loop, but maps are iterable through forof loop
 * so for using loops interation on object we use ForIn loops in next file 04_four.js
 */