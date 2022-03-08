/*  Author: KaptainCS3 
 *  Description: break keyword
 *  Date: 23th February 2022
 */


let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(true){
    guess = Math.floor(Math.random() * 10);
    if(guess === targetNum){
        console.log(`CORRECT! Guessed: ${guess} & target was : ${targetNum}`);
        break;
    }
    else{
        console.log(`Guessed ${guess}........Incorrect!`);
    }
}