/*  Author: KaptainCS3 
 *  Description: Nested Loop
 *  Date: 23th February 2022
 */

// multiplication table of 1 to 12

for(let i = 1; i <= 12; i++){
    console.log("");
    console.log(`Multiplication table of ${i}`);
    console.log("");
    for(let j =1; j <=12; j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
}