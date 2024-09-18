//singleton
//Object.create


// object literals
const mySym = Symbol("key1")
const JsUser = {
    // as key-value pairs. Key are assumed to be in string.
    name: "Sadique",
    [mySym]: "Panja",   //using symbol as key in object 
    age: 18,
    isLoggedIn: false,
    absentDay: ["Monday", "Saturday"]
}

console.log(JsUser.name);       // M-1. to access properties of object
console.log(JsUser["absentDay"]);   // M-2. to access properties of object
JsUser.name = "Sadique Reyaz";  // sadique reyaz
Object.freeze(JsUser);  // object is not freezed and doesn't propagate changes in it
JsUser.name = "Malik";  // sadique reyaz
console.log(JsUser[mySym]);
console.log(JsUser);

// adding function to JsUser object
// function can't be added to freezed object.
const JsUser2 = {}  // new object
JsUser2.greeting = function () {
    console.log("Hello World!");
}
JsUser2.showName = function () {
    console.log(`My name is ${this.name} `);
}
JsUser2.greeting()  //hello world!
console.log(JsUser2.greeting());    //hello world!
console.log(JsUser2.greeting);    //here we will get only reference of the funciton. o/p: [Function (anonymous)]

