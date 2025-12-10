// console.log(10>5);  //o/p-true
// console.log(99<5);  //o/p-false

// console.log("2">1);  //true

// console.log(null>0); //false
// console.log(null<0); //false
// console.log(null>=0); //true
// console.log(null==0); //false


// console.log(undefined>0); //false
// console.log(undefined<0); //false
// console.log(undefined>=0); //false
// console.log(undefined==0); //false



// === (strict check)
// console.log("2" === 1);  //false

const id = Symbol('123')
const changeId = Symbol('123')
console.log(changeId);  //Symbol(123)
console.log(typeof changeId);  //symbol
console.log(id === changeId);  //false (because of strict check it checks everything like same datatype,variables or everything)

const bigNumber = 12345676534245n





// Stack(Primitive)  Heap(Non-Primitive)

let myName = "Diptiranjan"

let anotherName = myName
anotherName = "abhisek"

console.log(myName);
console.log(anotherName);


let userOne = {
    email : "dipti@gmail.com",
    upi : "@diptiybl"
}

let userTwo = userOne
userTwo.email = "abhisek@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


