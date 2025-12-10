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
console.log(gameCounter);  //o/p-101


// Explicit Type Conversion

// Convert "123" into a number in three different ways.
//type-1(using Number)
// let number = 123
// let changeNumber = Number(number)
// console.log(changeNumber)
// console.log(typeof changeNumber);

//type-2(using parseInt)
// let number = 123
// let changeNumber = parseInt(number)
// console.log(changeNumber)
// console.log(typeof changeNumber);

//type-3(using unary+)
// const str = 123
// const num = +str
// console.log(num)
// console.log(typeof num);


// Convert false into a number. What is the result?
let result = false
let changeResult = Number(result)
console.log(changeResult)
console.log(typeof changeResult);


// Convert 100 to a string without using .toString().
let string = false
let changeString = String(string)
console.log(changeString)
console.log(typeof changeString);


// Explain the difference between:
Number("25")        //→ converts entire string → 25
parseInt("25.90")   // → extracts integer part → 25
parseFloat("25.90") //→ reads decimal → 25.9


// Predict the output:
Number("hello")   //o/p-NaN
parseInt("hello") //o/p-NaN



// Convert "500" into a number using five different ways.
//type-1(using Number)
// let number = 500
// let changeNumber = Number(number)
// console.log(changeNumber)
// console.log(typeof changeNumber);

//type-2(using parseInt)
// let number = 500
// let changeNumber = parseInt(number)
// console.log(changeNumber)
// console.log(typeof changeNumber);

//type-3(using unary+)
// const num1 = 500
// const num2 = +str
// console.log(num2)
// console.log(typeof num2);

//type-4(using parsefloat+)
// const num3 = 500
// const changenum4 = parseFloat(num3)
// console.log(changenum4)
// console.log(typeof changenum4);

//type-5(using multiplication * 1)
// const num5 = 500
// const num6 =num5*1
// console.log(num6)
// console.log(typeof num6);

//type-6(using math object methods)
// const num7 = 500
// const num8 = Math.floor(num7)
// console.log(num8)
// console.log(typeof num8);


// 14. Convert true into:

// number
let Numbers = true
let changeNumber = Number(Numbers)
console.log(changeNumber);
console.log(typeof changeNumber);

// string
const strings = true
const changeStrings = String(strings)
console.log(changeStrings);
console.log(typeof changeStrings);

// boolean
var a = true
var b = Boolean(a)
console.log(b)
console.log(typeof b);


// 15. Convert 0 into a boolean.
let abhisek = 0
let khatua = Boolean(abhisek)
console.log(khatua)
console.log(typeof khatua);

// 16. Convert " " (space) into number.
console.log(Number(" "))

// 17. Convert "123abc" using:
Number()
let abhi = "123abc"
let khatu = Number(abhi)
console.log(khatu);
console.log(typeof khatu);


parseInt()
let abc = "123abc"
let bcd = parseInt(abhi)
console.log(bcd);
console.log(typeof bcd);


parseFloat()
const x = "123abc"
const y = parseFloat(abhi)
console.log(y);
console.log(typeof y);


// What are results?
Boolean("false") //o/p-0


// Implicit Type Coercion

// Predict the output:
"5" + 5      // → "55"      (string concatenation)
"5" - 2      // → 3         (string converted to number)
"5" * "2"    // → 10        (both converted to number)
"5" + true   // → "5true"   (true → "true")
true + true  // → 2         (true → 1, 1 + 1)



// Predict the output:
null + 5        //→ 5      (null → 0)
undefined + 5   //→ NaN    (undefined → NaN)
"10" - true    // → 9      ("10" → 10, true → 1)



// Predict the output:
"10" - "2"   //8

// Predict:
"10" + "2"  //"102"

// Predict:
"10" * "2"  //20

// Predict:
"5" + 1 + 2  //"512"

// Predict:
1 + 2 + "5"  //"35"

//Predict:
"10" - true  //9

//Predict:
"10" + true  //"10true"

// Predict:
undefined + 1  //NaN

// Predict:
null + 1  //1

// Predict:
"hello" * 2  //NaN




// Why does +"123" convert the string to a number?
// The unary plus operator performs the abstract ToNumber conversion on its operand. For a numeric string it returns the numeric value — equivalent to Number("123").


// Why does "5" - 2 work but "5" + 2 does not?
// - is defined only for numeric operations, so both operands are converted to numbers (string → number) before subtraction. + is both numeric addition and string concatenation; if either operand is a string, + performs string concatenation. Therefore "5" - 2 → numeric 3, while "5" + 2 → "52".


// Why is typeof null an "object" even though null is not an object?
// This is a historical bug in the original implementation of JavaScript (ECMAScript) from 1995. Fixing it would break existing code, so it was retained for backward compatibility.


// What is the difference between: parseInt("12abc") & Number("12abc")
// parseInt("12abc") → 12 (parses leading numeric characters until a non-numeric char).
// Number("12abc") → NaN (requires the entire string to be a valid number).


// Why is NaN === NaN false?
// Per IEEE floating point and ECMAScript rules, NaN is not equal to any value, including itself. Use Number.isNaN(value) or Object.is(value, NaN) to detect NaN.


// How many primitive data types are in JavaScript?
// There are seven primitive types (ECMAScript as of modern specs):
// string,number,bigint,boolean,undefined,symbol,null (though typeof null === "object" historically)


// Is typeof function(){} === "function" correct?
// Yes, typeof function(){} === "function" returns "function". 


// Why is function not considered “object”?
// Functions are callable objects in JavaScript: they are objects with internal [[Call]] behavior. The language designers made typeof return "function" as a convenience to detect callable functions; that does not mean functions are not objects — they are objects with additional capabilities.