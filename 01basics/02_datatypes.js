"use strict";  // treat all JS code as newer version

// alert(9 + 1)  // we're using nodejs, not using browsers

let name = "Dipti"
let age = 20
let isLoggedIn = true
let state = ""


// null - representation of an empty value
// console.log(typeof null); - gives o/p object
// console.log(typeof undefined); - gives o/p undefined



// Practice questions


// Identify the data type of each:
let a = 10;    //o/p-number
let b = "10";  //o/p-string
let c = true;  //o/p-boolean
let d = undefined;  //o/p-undefined
let e = null;  //o/p-object
let f = {name: "Sam"};  //o/p-object
let g = [1,2,3];  //o/p-object



// What is the return value of:
typeof null  //o/p-object
typeof []  //o/p-object
typeof NaN  //o/p-number



// What is the output of:
console.log(typeof (10 > 5));  //o/p-boolean

// What is the output?
// let a = null;
// console.log(typeof a);  //o/p - object

//What is the output?
console.log(typeof NaN);  //o/p-number

//What is the output?
console.log(typeof Symbol("id"));  //o/p-symbol

//Predict the type:
let data = [1, "two", true];  //o/p-object

//Predict the type:
let user = { name: "Sam", age: 20 };  //o/p-object