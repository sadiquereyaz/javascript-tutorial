const marvel_heros = ["thor", "ironman", "spider-man"]
const dc_heros = ["Batman", "AntMan"]

//marvel_heros.push(dc_heros) //[ 'thor', 'ironman', 'spider-man', [ 'Batman', 'AntMan' ] ]
// const all_heros1 = marvel_heros.concat(dc_heros) //[ 'thor', 'ironman', 'spider-man', 'Batman', 'AntMan' ]

/*  spread operator when used with arrays (or other iterables). 
It allows you to "spread" or expand elements of an array (or object) into individual elements.  */

const all_heros2 = [...marvel_heros, ...dc_heros]   // more preferred than concatnation
// [ 'thor', 'ironman', 'spider-man', 'Batman', 'AntMan' ]
console.log(all_heros2);

let score1 = 453
let score2 = 33
let score3 = 989
console.log(Array.of(score1, score2, score3));