/*  Author: KaptainCS3 
 *  Description: break keyword
 *  Date: 23th February 2022
 */


let input = prompt("Hey, say something");
while(true){
    input = prompt(input);
    if(input === "stop copying me"){
        break;
    }
}
console.log("YOU WIN!!");