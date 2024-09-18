const arr = [4,23,6,2]
console.log(arr);

arr.push(99);
console.log(arr);   //[ 4, 23, 6, 2, 99 ]
arr.unshift(11);      // [11, 4, 23, 6, 2, 99 ]
arr.shift(11);      // [4, 23, 6, 2, 99 ]

console.log(arr.includes(6));   // true
console.log(arr.includes(-6));   // false

const arrayToString = arr.join(' -> ')    // join takes string-seperator as parameter and converts arry into string
console.log(arrayToString);

const orig = [9,8,6,7]
const dup = orig
dup.push(5555)

/* Note: In JavaScript, arrays are reference types, 
meaning when you assign an array to another variable, 
you are copying the reference to the same array, 
not creating a new, independent array.  */
console.log("Orig: ", orig);    //Orig:  [ 9, 8, 6, 7, 5555 ]
console.log("dup:  ", dup);     //dup:  [ 9, 8, 6, 7, 5555 ]




