// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); //give time in miliseconds from 1 jan 1970 
console.log(myCreatedDate.getTime()); //convert our myCreatedDate to miliseconds as well (useful when we wan to compare the date and time like we use this in hotel booking to compare date and time , and in other examples as well)

// console.log(Math.floor(Date.now()/1000)); //when we want to change it into seconds we divide it by 1000 and it will give decimal value here , so we use Math.floor to remove values after decimals

let newDate = new Date()
console.log(newDate); //to extract months,year,day etc we use methods by there respective name to find out here
console.log(newDate.getMonth() + 1); //give value using array format which start from 0 , so we add +1 here , so end user don't be confused
console.log(newDate.getDay()); //strt from monday then give value in number format

// `${newDate.getDay()} and the time ` // using string interpolar notation to get date and etc

newDate.toLocaleString('default', {
    weekday: "long",
    
})

//use of toLocalestring
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
 //also use options for these
 // Request a weekday along with a long date
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// Expected output: "2012. 12. 20. 오전 3:00:00"

// Arabic in most Arabic-speaking countries uses Eastern Arabic numerals
console.log(event.toLocaleString("ar-EG"));
// ٢٠/١٢/٢٠١٢ ٥:٠٠:٠٠ ص"