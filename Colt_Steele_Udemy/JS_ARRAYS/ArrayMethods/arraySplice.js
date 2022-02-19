//  done by KaptainCS3  19 /02/ 2022
/*      Method changes the contents of an array by removing or replacing
             existing elements and/or adding new elements in place      */
const months = ['Jan', 'March', 'April', "june"];
months.splice(1, 0, 'Feb'); //! note first argument indicates insertion index
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', "june"]

months.splice(4, 1, 'May'); //! note second argument indicates num of el to be deleted
// replaces 1 elements at index 4

console.log(months)
// expected output: Array['Jan', 'Feb', 'March', 'April', 'May'];