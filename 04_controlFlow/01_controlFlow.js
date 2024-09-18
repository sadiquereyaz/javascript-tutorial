if (2 == "2") console.log("condition is true");      // true

if (2 === "2") console.log("condition is false");   //false

// falsy value: 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value:
// "0", 'false', " ", [], {}, emptyFunction(){} 

// Nullish Coalishing Operators (??): null undefined. Similar to defalt value in kotlin.

let val1;
val1 = 10 ?? 20 //10
val1 = null ?? 20   // 20
val1 = null ?? undefined ?? 30   // 30
console.log(val1)


// terniary operator
// condition ? true : false

const icePrice = 10
icePrice > 20 ? console.log("I'm not buying anything") : console.log("Lets buy something");
