/* 
Immediately invoked function Expression (IIFE). 
It is a way to run a function as soon as it is defined without having to call it later.   

--Basic Syntax--
(function() {
    // Code to be executed immediately
})();

--Breakdown Syntax--
The function is wrapped in parentheses (function() { ... }) to convert it 
from a function declaration to a function expression.
It is then immediately invoked with () right after the function definition.

Variables inside an IIFE are not accessible outside of it, 
helping avoid conflicts in larger codebases.
 
If the previous line of code doesn't end with a semicolon, and the next line starts with an IIFE, 
JavaScript might incorrectly assume that the two lines are connected, 
leading to unexpected behavior or syntax error because an IIFE starts with an opening parenthesis (.
ex: 
let a = 5
(function() {
    console.log("This is an IIFE");
})();

Without the semicolon after let a = 5, JavaScript interprets this as:
let a = 5(function() {
    console.log("This is an IIFE");
})();
JavaScript tries to treat 5 as a function and pass the IIFE as an argument to it, which results in a syntax error.
*/
let globalVar = "i'am global variable.";    // ; is compulsory
// named IIFE
(function () {
    let privateVariable = "This is a private variable";

    function privateFunction() {
        console.log("This is a private function");
    }

    // Access the private variable and function within the IIFE
    console.log(privateVariable);
    privateFunction();
})();

// Trying to access the private variable or function outside the IIFE will result in an error
//   console.log(privateVariable); // Error: privateVariable is not defined
//   privateFunction(); // Error: privateFunction is not defined

((arg) => {
    console.log(`Value of argument is : ${arg}`);
})('--Parameter Passed from here to function--');

    
