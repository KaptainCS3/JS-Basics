/*
 *   Author: KaptainCS3
 *  Description: Function Expression
 *  Date: 9th March 2022
 */

/*
 *   Function that work with other function
 *   Accepting other functions as arguments
 *   Return a function
 */
// example#1
function callTwins(func) {
  func();
  func();
}
function laugh() {
  console.log("lololololololololololololololo");
}
callTwins(laugh); // pass a function as argument

// example#2

function repeat(func1) {
  func1();
  func1();
}
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
repeat(rollDie);
