/*using For In loop on object to iterate on object */
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const value in myObject) {
    
    //console.log(`${key} shortcut is for ${myObject[key]}`); //here first we take just keys, and after that by using object myObject and
                                                        // then take the value of keys which we inserted in keys like this myObject[keys] to takeout the value of keys.
}

/*now we check can we insert For in loop on array  */

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);  //result : 0 1 2 3 4 => so it will iterate in "FOR IN" loop and gives keys as result which is 01234 in array as predefined,whereas when we use "FOROF" loop we get values directly [this is one major difference in both of them]
    //console.log(programming[key]); //getting values from keys
}

//now check for maps , does FOR IN loop work in maps ?
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//so the result is unique : we don't get anything here , we got no error and also no result also , because we can't iterate in maps , will discuss futher this in future.