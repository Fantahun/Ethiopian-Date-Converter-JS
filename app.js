var ethiopianDate = require('ethiopian-date');

// let ethDate = [23,08,1990]  // the excel date goes into the array (one by one since i dont get a solution)

// let greg = ethiopianDate.toGregorian(ethDate[0],ethDate[1],ethDate[2]).toString()  // treated as day month and year format while converting
// let formattedDate = greg.replace(/,/g,"/") // adding "/" betweed date, month to get the needed format
// console.log(formattedDate)   // final result in the required format.



/*  CONVERT MULTIPLE DATES */

let ethDates = [
    // An array of Ethiopian dates in the format [day, month, year]
    
[23,08,1990]
    
];

// A loop to convert each Ethiopian date to Gregorian date and print it
for (let ethDate of ethDates) {
let greg = ethiopianDate.toGregorian(ethDate[0], ethDate[1], ethDate[2]).toString(); // treated as day month and year format while converting
let formattedDate = greg.replace(/,/g, "/"); // adding "/" betweed date, month to get the needed format
console.log(ethDate ,` > ` ,formattedDate); // final result in the required format.
}