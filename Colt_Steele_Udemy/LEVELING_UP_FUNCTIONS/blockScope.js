/*  Author: KaptainCS3 
 *  Description: Argument Intro
 *  Date: 28th February 2022
 */

/*      block scope
    * conditional
    * loops         */

// example#1

let radius = 8;
if(radius > 0){
    const PI = 3.14159;
    let msg = "HII";
}

console.log(radius);
// expected output: 8
console.log(msg);
//! expected output: error msg not defined (variable is block scope)

// example#2 var keyword

for(let i = 0; i < 5; i++){
    var msg = 'DEV world is Awesome!';
    console.log(msg)
    //! note var keyword are function scoped variable
}
console.log("");
console.log(msg);
// can be access out of the loop
