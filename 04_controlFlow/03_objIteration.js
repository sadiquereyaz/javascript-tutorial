const obj = {
    'name': `Sadique`,
    'courses': 'CSE'
}

// the above obj is not iterable according to the method below.
/* 
for (const property of obj) {
    console.log(property);
} 
 */   

for (const key in obj) {        
    console.log(`key: ${key} --> Value: ${obj[key]}`);
}

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (const key in arr)
    console.log(`${key}-->${arr[key]}`);   // for array, key is index

console.log("new change");
