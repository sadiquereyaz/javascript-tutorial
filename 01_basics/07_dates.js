let myDate = new Date()

console.log(typeof myDate); //object
console.log(myDate.toString())  //Sun Sep 15 2024 10:59:34 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())  //Sun Sep 15 2024
console.log(myDate.toLocaleString())  //15/9/2024, 11:00:20 am

let myCreatedDate = new Date(2023, 0, 19);
console.log(myCreatedDate.toString()) // Thu Jan 19 2023 00:00:00 GMT+0530 (India Standard Time)
// months start from 0 index

let myDate3 = new Date(2030, 1, 5, 5, 15, 61)    // year, month, day, hour, minute, second
console.log(myDate3.toLocaleString()) // 5/2/2030, 5:16:01 am

let myDate4 = new Date("2015-01-19")
console.log(myDate4.toDateString());    // Mon Jan 19 2015
console.log(myDate4.toString());    // Mon Jan 19 2015  //Mon Jan 19 2015 05:30:00 GMT+0530 (India Standard Time)
console.log(myDate4.getDay());    // 0

let myTimestamp = Date.now()
// milliseconds value from 01/01/1970 to now
console.log(myTimestamp);   // 1726379085211 ms
console.log(myDate4.getTime()); // 1421625600000 ms


