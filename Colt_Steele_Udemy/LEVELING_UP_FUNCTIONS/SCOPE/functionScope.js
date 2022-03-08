/* 
 *  Author: KaptainCS3 
 *  Description: Function Scope
 *  Date: 28th February 2022
 */

// example#1

function collectEggs(){
    let totalEggs = 6;
}
collectEggs();
console.log(totalEggs);
            /*       expected output: return error because function scope 
            variable declare with let keyword can! be accessed out of the function      */

// example#2

function helpMe(){
    let msg = "I'm on fire!!";
    msg;    //"I'm on fire";
}
helpMe()
msg;    //! DEFINED!
// msg is scoped to the helpMe function

// example#3

let bird = 'mandarin duck';
function birdWatch(){
    let bird = 'golden pheasant';
    bird;   //'golden pheasant'
            /* in this case if to variable have thesame name the function 
            scoped variable wins out else the global scope variable wins out */
}
bird;   //'mandarin duck'
