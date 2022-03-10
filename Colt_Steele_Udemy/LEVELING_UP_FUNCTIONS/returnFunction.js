/*
 *  Author: KaptainCS3
 *  Description: Function Expression
 *  Date: 10th March 2022
 */

// example#1

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS, I AM A GOOD FUNCTION!");
      console.log("YOU WIN A MILLION DOLLAR");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY  A COMPUTER VIRUS!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!!");
    };
  }
}
const mysteryFunc = makeMysteryFunc();
mysteryFunc();

// example#2

// refactory function

function isBetween(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = isBetween(0, 18);
const isAdult = isBetween(19, 64);
const isSenior = isBetween(65, 130);

isAdult(12);
//! expected output false

isSenior(70);
//! expected output true

isChild(6);
//! expected output true
