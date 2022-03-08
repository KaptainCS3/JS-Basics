/*  Author: KaptainCS3 
 *  Description: Return Keyword
 *  Date: 25th February 2022
 */

// return keyword stop the execution of a function

//example one
function sum(a, b){
    return a + b;
}
let result = sum(1, 4);
alert(result);

//example two
function checkAge(age){
    if(age >= 18)
    return true;
    else
    return confirm('Do you have permission from your parents?');
}
let age = prompt("How old are you?", 18);
if(checkAge(age))
alert( "access granted" );
else
alert( "access denied" );