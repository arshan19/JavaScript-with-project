//for Each loop Discussion , most commonly use loop

const coding = ["js", "ruby", "java", "python", "cpp","c"]

// coding.forEach( function (val){
//     console.log(val);  /* +++ in forEach loop Method , we need to give a callback function which return the value according to what we write in function ++++ */
// } )

// coding.forEach( (item) => {
//     console.log(item);  /* +++++ here we use arrow function to do same thing like above +++++++ */
// } )

// function printMe(item){
//     console.log(item);  /* ++++ here we create our own callback func before and execute in forEach Method so that we don't need to define this on the go! +++++ */
// }

// coding.forEach(printMe) 

// coding.forEach( (item, index, arr)=> {  //so in ForEach loop we have access to item as well as access to different values like 'index' of item and full 'arraylist' arr as well which we define above as well , will use this when required.
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
} )

/**Note: We get value from database as an Array format , or usme har ek value ek object he hota hai. 
 * mtlb zyadatar hum database ko he fetch krrhe hoge , usme hume array ke format mai database milega jisme hazooro object hoge unko agar hme fetch krna ya kuch specific 
 * nikalna hai usme to hum forEach loop use krlege jisse humara kaam ekdm ho jaeyega jese humne uper kiya.
*/
