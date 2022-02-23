/*  Author: KaptainCS3 
 *  Description: For Of Loop
 *  Date: 23th February 2022
 */
let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let str = "Good Things Takes Time!!"
// regular for loop
console.log("Regular for loop");
console.log("*************");
for(let i = 0; i < dayOfWeek.length; i++){
    console.log(dayOfWeek[i]);
}

console.log("*************");
/* syntax for of loop
    for(let elArray of ArrayName){
        console.log(elArray) // return all el in array
    }
        */

// iterating overArray
console.log("For Of Loop :)");
console.log("*************");
    for(let days of dayOfWeek){
        console.log(days);
    }
    for(let char of str){
        console.log(char);
    }
    console.log("*************");