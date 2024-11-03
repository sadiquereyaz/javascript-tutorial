const arr = [1, 2, 8, 5];

console.log(`Original Array: ${arr}`);
const myTotal = arr.reduce( function (accumulator, currValue){
    console.log(`Acc: ${accumulator} and Current value: ${currValue}\nAccumulaor Expected: ${accumulator+currValue}`);
    return accumulator + currValue
}, 2)   // initial value of accumulator is 0

console.log(myTotal);

