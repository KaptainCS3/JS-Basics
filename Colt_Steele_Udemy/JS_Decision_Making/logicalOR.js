//  done by KaptainCS3  16 /02/ 2022

let age = parseInt(prompt("enter your age"));
if(age < 6 || age >= 65){
    console.log("your get in for free!");
}
else if(age > 5 && age <= 10){
    console.log("That will be $10 please!");
}
else{
    console.log("That will be $20 please!");
}