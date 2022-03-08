/*  Author: KaptainCS3 
 *  Description: Object Literal practice exercise
*  Date: 23th February 2022
*/

// reference w3sources.com/javascript-exercises/javascript-object-exercises.php
/*
Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
*/
const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 ,
};  

// using ObjectMethod
let i = 0
for(let newStudent in student){
    if(newStudent){
        i++;
    }
}
console.log(`Object lengths is : ${i}`);
