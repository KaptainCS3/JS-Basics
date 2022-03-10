/*
 *  Author: KaptainCS3
 *  Description: Function Expression
 *  Date: 10th March 2022
 */


function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
        console.log("CONGRATS, I AM A GOOD FUNCTION!");
        console.log("YOU WIN A MILLION DOLLAR");
        }
    }
    else{
        return function(){
        alert("YOU HAVE BEEN INFECTED BY  A COMPUTER VIRUS!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
        alert("STOP TRYING TO CLOSE THIS WINDOW!!");
    }
}
}
const mysteryFunc = makeMysteryFunc();
mysteryFunc();