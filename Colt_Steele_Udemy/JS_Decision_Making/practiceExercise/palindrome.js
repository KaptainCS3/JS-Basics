/*  Author: KaptainCS3 
 *  Description: Palindrome practice exercise
 *  Date: 22th February 2022
 */

function reverseStr(str){
    let  reverseStr = str.split("").reverse().join("");
    //test condition no loops
    if(reverseStr === str)
    console.log(`${str} is a palindrome`);
    
else
console.log(`${str} is not a palindrome`);
}
reverseStr(prompt("Enter a string"));