const classOneEmployee = {
    name: "Sadique",
    salary: 433000,
    workingHr: "6hr",

    welcomeMessage: function () {
        console.log(`Welcome to ${this.name}, your salary is ${this.salary}.`);
        console.log(this);

    }
}

classOneEmployee.welcomeMessage()   // Welcome to Sadique, your salary is 433000.
classOneEmployee.salary = 9999999;
classOneEmployee.welcomeMessage()   //  Welcome to Sadique, your salary is 9999999.
// console.log(this);       // {}  because we are in node environment. whereas in browser, we will be getting windows object. 

console.log("----------------------------------------------------------------");

// function chai(){
//     let username = "sadique"
//     console.log(this.username); // undefined    i.e. this.properties can only be used inside object
// }
// chai()

const chai = () => {
    let username = "sadique"
    console.log(this.username); // undefined i.e. this.properties can only be   
}

//various methos of function declaration

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => {num1 + num2}     // curly brackets without return is not allowed. either no or () is used.
const addTwo = (num1, num2) => num1 + num2

//returning object
const item1 = (name, price) => ({ itemName: name, itemPrice: price })

console.log("Sum of two number is :", addTwo(4, 1));
console.log("Detail of Item is: ", item1("apple", 45));