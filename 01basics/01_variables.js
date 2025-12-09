const accountId = 78675
let accountEmail = "dipti@gmail.com"
var accountPassword = "12345"  //not use var for declaring a variable because of issues in block scope & functional scope
accountCity = "Cuttack"
let accountState;   //in javascript if we have declare a variable but not assigned its value then it shows "undefined" in output


accountEmail = "@abhigmail.com"
accountPassword = "098765"
accountCity = "Bhadrak"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])