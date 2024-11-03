const arr = [1, 2, 8, 5, 12, 19, 14, 16];

const newNum = arr.map((num) => num + 1);
console.log(newNum);    //[2,  3,  9,  6, 13, 20, 15, 17]

const chainMap = arr
    .map((arg1) => arg1 + 1)
    .map((arg1a) => arg1a - 1);
console.log(chainMap);  //[1,  2,  8,  5, 12, 19, 14, 16]

const hybridChain = arr
    .map((arg1) => arg1 + 1)
    .map((arg1a) => arg1a - 1)
    .filter((arg1b) => arg1b > 6);
console.log(hybridChain);  //[ 8, 12, 19, 14, 16 ]
