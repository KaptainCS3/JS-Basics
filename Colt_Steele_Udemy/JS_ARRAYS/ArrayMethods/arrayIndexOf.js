// done by KaptainCS3   19 /02/ 2022

    /*       Method returns the first index at which a given element
                can be found in the array, or -1 if not found           */

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

//starting from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1