const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

arr.forEach(function (it) {
    console.log(it);
});

arr.forEach((it) => {
    console.log(it);
});

arr.forEach((it, index, sourceArray) => {   // foreach provides three parameters
    console.log(`${it} -> ${index}`);
});

function sayMyName(params) {
    console.log(params);
}

arr.forEach(sayMyName);

console.log("----------------------");
// return value of for each
const retVal = arr.forEach((item) => {
    return item;
})

console.log(`Returned Value from the above foreach loop: ${retVal}`);

const nums = [1, 3, 5, 6, 7, 8, 9, 10];
const numGrThan4 = nums.filter((item) => {
    return item > 4     // filter returns the argument which satisfies condition
})
console.log(`Returned Value from the above filter function:`);
console.log(numGrThan4);

const numGrThan5 = nums.filter((item) => (item > 5));
console.log(`Returned Value from the above filter function: `);
console.log(numGrThan5);


console.log(`arr`);
console.log(`${arr}`);
