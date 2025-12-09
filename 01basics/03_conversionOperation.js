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
console.log(stringNumber);
console.log(typeof stringNumber);

