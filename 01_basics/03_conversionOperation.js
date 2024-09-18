console.log("--------------------------Number with String--------------------------------------")
let scoreWithAlpha = "sadique243"
console.log(typeof(scoreWithAlpha))  //string
console.log(typeof scoreWithAlpha )  //string

let valueInNumber = Number(scoreWithAlpha)   //typecasting
console.log(typeof valueInNumber)   //number
console.log(valueInNumber)   //NaN (Not a Number) 

console.log("--------------------------Number in String--------------------------------------")

let score = "33"
console.log(typeof score) //string
valueInNumber = Number(score) //typecasting
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //33

console.log("--------------------------Boolean in String--------------------------------------")
let isLoggedIn = "anyString"
let stringToBool = Boolean(isLoggedIn)
console.log(typeof stringToBool) //boolean
console.log(stringToBool)   //true

console.log("Empty String--------------------------------")
isLoggedIn = ""     //empty string
stringToBool = Boolean(isLoggedIn)
console.log(stringToBool)   //false

