const regularUser = {
    email: "email@example.com",
    name: {
        username: {
            firstName: "John",
            lastName: "Smith"
        }
    }
}

console.log(regularUser.name.username.firstName)
//other methhod to access
// const {shortcut} = regularUser.name.username.firstName
const { email: e } = regularUser
console.log(`email of the user is ${e}`);


const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 6: "c", 4: "m" }

// const obj3 = {obj1, obj2}   // object ke andar object aa jaega.
// const obj3 = Object.assign({}, obj1, obj2)  // first object (i.e. {}) is target in which other objects are merged
// merging using spread operator
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const arr = [5, 2, 4];
console.log(arr);  //[ 5,2,4 ]
console.log(`${arr}`);  // 5,2,4    i.e. when arrays are converted into strings.

// getting all the keys as array of string.
console.log("Array of all Keys of Object: ", obj2, " : ", Object.keys(obj2));
console.log("Array of all Values of Object: ", obj2, " : ", Object.values(obj2));

console.log(regularUser.hasOwnProperty('email')); // true i.e. if the key is present or not

