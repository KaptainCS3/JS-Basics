//  done by KaptainCS3  19 /02/ 2022

        /*       Method which slice an array and creates a copy 
                passing either starting or ending index or both     */ 
const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'indigo', 'violet'];

console.log(colors.slice(4));
// expected output: 'yellow', 'indigo', 'violet'

console.log(colors.slice(0, 3))  //! note passing start and end index will result in include start index and exclude end index  
// expected output: 'red', 'blue', 'green'

console.log(colors.slice(-2))
// negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// expected output: 'indigo', 'violet'