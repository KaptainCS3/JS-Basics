// done by KaptainCS3   17 /02/ 2022

//Crucial concept working with javascript arrays

//built in method for array 'pop' remove el at the end of the array

const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
dayOfWeek.pop() // each time this method is called to this array el is remove from the end of the array
dayOfWeek.pop()
dayOfWeek.pop()
dayOfWeek.pop()
dayOfWeek.pop()
console.log(dayOfWeek); // returns 'Monday', 'Tuesday'

//! when pop becomes < '0' it will return and empty array!! "[]"