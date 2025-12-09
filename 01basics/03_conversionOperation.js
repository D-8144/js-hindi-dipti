// number conversion
let score = "33abhisek"

// console.log(typeof score);     //- directlt 
// console.log(typeof (score));  // - using method

let valueNumber = Number(score)
// console.log(typeof valueNumber);
// console.log(valueNumber);   //o/p - NaN (In JavaScript, NaN stands for "Not-a-Number." It is a special numeric value that represents an undefined or unrepresentable result in mathematical operations.)




// let score = null 
// let valueNumber = Number(score)
// console.log(valueNumber); - o/p-number


// let score = undefined 
// let valueNumber = Number(score)
// console.log(valueNumber); - o/p-NaN




// console.log(typeof NaN);                     // "number"
// console.log(0 / 0);                         // NaN
// console.log(parseInt("abc"));              // NaN
// console.log(Math.sqrt(-1));               // NaN
// console.log(NaN === NaN);                // false
// consoe.log(isNaN("hello"));             // true (because "hello" can be coerced to NaN)
// console.log(Number.isNaN("hello"));    // false (because "hello" is not strictly NaN)
// console.log(Number.isNaN(0 / 0));     // true
// true => 1, false => 0



// boolean conversion
let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); - o/p -false



// string conversion
let someNumber = 33 
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


let value = 55
let negativeValue = -value
// console.log(negativeValue);





// OPERATIONS

let str1 = "dipti"
let str2 = "abhisek"

let str3 = str1 + str2
// console.log(str3);


// The + operator in JavaScript does two things:
// numeric addition if both operands are numbers,
// string concatenation if either operand is a string (then the other is converted to a string).
// The + operator is left-to-right associative, so expressions are evaluated from left to right.

// console.log("1" + 2);        // "12"
// console.log(1 + "2");        // "12"
// console.log("1" + 2 + 2);    // "122"
// console.log(1 + 2 + "2");    // "32"

// console.log(+true); - o/p -1
// console.log(true+); - o/p showing error
// console.log(+""); - o/p - 0


let gameCounter = 100
++gameCounter;
console.log(gameCounter);
