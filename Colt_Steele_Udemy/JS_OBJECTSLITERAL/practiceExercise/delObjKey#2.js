/*  Author: KaptainCS3 
 *  Description: Object Literal practice exercise
 *  Date: 22th February 2022
 */

// reference w3sources.com/javascript-exercises/javascript-object-exercises.php

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};


// delete rollno from student object
delete student.rollno;

console.log(student);
// expected outpu : name : David RAyy, Sclass : 'VI'