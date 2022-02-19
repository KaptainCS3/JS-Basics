
let num1 = parseInt(prompt("Enter num1"));
let num2 = parseInt(prompt("Enter num2"));
let num3 = parseInt(prompt("Enter num3"));
console.log(`Num1 is : ${num1}`);
console.log(`Num2 is : ${num2}`);
console.log(`Num3 is : ${num3}`);
if(num1 > num2 && num1 > num3){
    if(num2 > num3){
    console.log(`First value: ${num1}`);
    console.log(`Second value: ${num2}`);
    console.log(`Third value: ${num3}`);
    }
    else{
    console.log(`First value: ${num1}`);
    console.log(`Second value: ${num3}`);
    console.log(`Third value: ${num2}`);
    }
}
else if(num2 > num1 && num2 > num3){
    if(num1 > num3){
    console.log(`First value: ${num2}`);
    console.log(`Second value: ${num1}`);
    console.log(`Third value: ${num3}`);
    }
    else{
    console.log(`First value: ${num2}`);
    console.log(`Second value: ${num3}`);
    console.log(`Third value: ${num1}`);
    }
}
else if(num3 > num1 && num3 > num2){
    if(num1 > num2){
    console.log(`First value: ${num3}`);
    console.log(`Second value: ${num1}`);
    console.log(`Third value: ${num2}`);
    }
    else{
    console.log(`First value: ${num3}`);
    console.log(`Second value: ${num2}`);
    console.log(`Third value: ${num1}`);
    }
}
else{
    console.log("Error!!");
}