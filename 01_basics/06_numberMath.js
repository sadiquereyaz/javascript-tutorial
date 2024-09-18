let num1 = 300  // js automatically detect the data type of num1
console.log(num1)   //300

let num2 = new Number(4666)     // when we ourself want to declare datatype of variable, then we create obj.
console.log(num2);      //[Number: 4666]

console.log("---------------Math-----------------------");
//Returns the value of the input rounded to the nearest integer.
console.log(`Round off of 6.6 is ${Math.round(6.6)} and of 6.4 is ${Math.round(6.4)} and that of -6.6 is ${Math.round(-6.6)}`);

console.log(`Floor value of 6.4 is ${Math.floor(6.4)}`);    // 6 i.e.: Returns the largest integer less than or equal to the input.
console.log(`Floor value of -6.4 is ${Math.floor(-6.4)}`);    // -7

console.log(`Ceil value of 6.4 is ${Math.ceil(6.4)}`);    // 7 i.e.: Returns the largest integer less than or equal to the input.
console.log(`Ceil value of -6.4 is ${Math.ceil(-6.4)}`);    // -6

console.log(`Absolute value of -6 is ${Math.abs(-6)}`);    // 6

console.log(`Integer part of 8.15 is ${Math.trunc(8.15)}`); // 8

console.log(`Maximum of 4, 6, 2 is ${Math.max(4, 6, 2)}`); //6
console.log(`Minimum of 4, -6, 2 is ${Math.min(4, -6, 2)}`); //-6
let arr = [1, 2, 3, 4, 5]
console.log(`Maximum of arr = [1, 2, 3, 4, 5] is ${Math.max(...arr)}`);


let max = 100
let min = 95
console.log(`Random number between ${min}, ${max} is ${Math.floor(Math.random()*(max-min+1)) + min}`);


