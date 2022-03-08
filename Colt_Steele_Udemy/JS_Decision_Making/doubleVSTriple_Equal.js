// done by KaptainCS3  13 /02/ 2022
/* double equality :: check for equality of value, but not the equality type.
-It coerces(convert) both balues to the same type and then compares them. 
- this can lead to some unexpected results!
*/
let num1 = 3;
let num2 = 3;
let num3 = "3";
console.log(num1 == num2); // expected result True
console.log(num1 == num3);  // unexpected result comparing number to string False but it "True" since it a double equality operator 

/* triple equality :: */
console.log(num1 === num2); //check equality and data type return 'true'
console.log(num1 === num3); // check equality and data type return 'false' number and string ! thesame data type