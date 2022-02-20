//  done by KaptainCS3  20 /02/ 2022

// comparing arrays using the double and trible equal operator
//! note since array a Dynamic DS it can't figure out the amount of space to allocated to it content 

const num = [34, 6, 92, 0];
const num2 = [34, 6, 92, 0];

console.log(num === num2);
// expected output: False;

//! note when array is declared an initialised the variable holds the address to that array

const evenNum = [0, 2, 4, 6, 8, 10];
const evenCopy = evenNum;

console.log(evenNum === evenCopy);
// expected output: True;

//! note changes to any variable will affected the other since the all have the address in memory. Double and triple equality will only check for address reference in memory