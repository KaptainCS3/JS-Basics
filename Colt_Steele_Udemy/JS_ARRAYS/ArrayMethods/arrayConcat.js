//  done by KaptainCS3  19 /02/ 2022

//cocat in this case will merge two or more array into one 
const array1 = [23,45, 50];
const array2 = [23,45, 50];
const array3 = [23,45, 50];
const mixArray = ['Lion', true, 4]
const strArray = ['Leonel', 'Cabrel', 'Maxim', 'Jordan']
console.log(array1.concat(array3,array2)); // returns a new merged array with [23, 45, 50, 23, 45, 50, 23, 45, 50]
console.log(strArray.concat(strArray)); // returns ['Leonel', 'Cabrel','Maxim',  'Jordan','Leonel', 'Cabrel','Maxim',  'Jordan']