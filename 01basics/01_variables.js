const accountId = 78675
let accountEmail = "dipti@gmail.com"
var accountPassword = "12345"  //not use var for declaring a variable because of issues in block scope & functional scope
accountCity = "Cuttack"
let accountState;   //in javascript if we have declare a variable but not assigned its value then it shows "undefined" in output


accountEmail = "@abhigmail.com"
accountPassword = "098765"
accountCity = "Bhadrak"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])







// Practice questions 


// what will be the output of the follwing code?
// let x;
// console.log(x);  //o/p-undefined
// x = 10;
// console.log(x);  //o/p-10



// Predict the output:
console.log(a);
var a = 5;  //o/p-undefined



// Predict the output:
// console.log(b);
// let b = 10;  // shows error can't access 'b' for initialization


// What will be the output?
var a = 5;
{
    var a = 10;
}
console.log(a);  //o/p-10



// What will be the output?
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);   //o/p -2,1


// Is the following valid? Why?
// const score;
// score = 50;   //o/p-shows invalid declaration error because of const can't be declared without assigning a value

// What happens?
// console.log(y);
// let y = 20;   //o/p-can't access 'y' before initialization


// Predict result:
var p = 1;
var p = 2;
console.log(p);  //o/p-2


// Predict result:
// let q = 1;
// let q = 2;  //o/p-shows error because of 'q' has already decalred once so can't be reassigned twice 