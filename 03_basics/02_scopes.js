/* 
    'let' is block scope
    'var' is Global scope
    declaration without let or var can be treated as 'var' and have global scope.
*/


addOne(5);  //6
function addOne(params) {
    message = "I am inside" 
    return params + 1
}
addOne(4)   //5
console.log(message);


// addTwo(8);       // cannot access addTwo() before initialization
const addTwo = function (params) {
    // this function is sometimes called expression
    // expression call can only be placed after function implementation
    return params + 2;
}
