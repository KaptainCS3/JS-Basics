/*  Author: KaptainCS3 
 *  Description: For In Loop
 *  Date: 23th February 2022
 */

// student objectArray

const student = {
    firstName : "David",
    lastName : "Jones",
    strenghts : ["Music", "Art"],
    exams :{
        midterm : 92,
        final : 88
    }
};

//iterating over Object

/*syntax for in loop
for(let variableName in objectName){
    console.log(variableName);  // returns only the keys
}
*/

for(let stud in student){
    console.log(stud);  // retuns only the keys of the object
}
for(let newStudent in student){
    console.log(`${newStudent} is : ${student[newStudent]}`);   // using string literals we can print the key value pairs of an object
                                                                //! using "." notation will cause and error since it has limited functionalities  
}
// use Objectmethods + For Of to iterate over Object
for(let keys of Object.keys(student)){
    console.log(keys);  //return the keys 
                        //! Object.key(student) convert object to array so it can be iterable using for of loop
}
for(let keys of Object.values(student)){
    console.log(keys);  //return the values 
                        //! Object.values(student) convert object to array so it can be iterable using for of loop
}
for(let obj of Object.entries(student)){
console.log(obj);   // return obj in array form
}