// const coding = ["js", "ruby", "java", "python", "cpp"]

/*If we want to store this callback function of FOREACH loop into a variable, do this return me any value ?
 so , forEach loop does not return any value
 so what that purpose we have other method as well like we use filter below.*/

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* filter opearion: it return the value which return true to the condition*/

 const newNums = myNums.filter( (num) => {
     return num > 4  /**** if we complete our arrow function in one line,we doesn't required return keyword but if we use {} braces(starting of our scope) and implement our function in next line ,then we required return keyword.***/
 } )

/* how to use ForEach loop to return values in new variable */

// const newNums2 = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums2.push(num)
//     }
// } )

// console.log(newNums2);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userBooks = books.filter( (bk) => bk.genre === 'History') 
  //implement filter books array where we have different object and each object contain some value(item) here which is bk here and then we extract bk property or method we have in our object like title,genre,published,edition here and according to dot method we can search it out and implement it

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
  })
  console.log(userBooks);

  //for my learning prespective
  const getBooks = books.filter( (bk) =>  bk.genre === 'Science' || bk.publish > 1990 )
  console.log(getBooks);
