/*  Author: KaptainCS3 
 *  Description: Object Literal data access
 *  Date: 21th February 2022
 */

//! note all keys in an object are converted into a string

//modeling a person

const person = {
    firstName : 'Mbi Enow',
    lastName : 'Leonard Appelgryn',
    age : 20,
    height : 1.81,
    nationality : 'Cameroonian',
    maritalStatus : 'Single'
};

//modeling a blog post comment

let comment = {
    userName : 'KaptainCS3',
    downVotes : 5,
    upVotes : 250,
    netScore : 200,
    commentText : 'React, Sass and Node is awesome',
    tags : ['#Yellowflash', '#Turkson', '#Durel'],
    isAdmin : true
};

// accessing data from object
// commentText from commentObj uisng ".key" symbol

console.log(`Blog post comment is :${comment.commentText}`);
// expected output: Blog post comment is :Reacts, Sass and Node is awesome

// lastName from personObj

console.log(`My last name is :${person.lastName}`);
// expected output: My last name is :Leonard Appelgryn

// accessing using "["key"]"
// upVotes from commentObj

console.log(`Greet your upvotes this week is :${comment["upVotes"]}`);
// expected output: RGreet your upvotes this week is :250

//nationality from personObj

console.log(`Hey i'm a ${person["nationality"]} by nationality`);
// expected output: Hey i'm a Cameroonian by nationality

