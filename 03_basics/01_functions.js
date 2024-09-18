const showName = function(){
    console.log("Sadique");    
}

function displayName(){
    console.log("Hellow Sadique"); 
}

showName()
displayName();


// function which can take any number of parameters
function calculateCartPrice(...num){
    return num
}
function calculateCartPrice2(price1, price2, ...num){
    return num
}

console.log(calculateCartPrice(43, 64,22));     //[ 43, 64, 22 ]
console.log(calculateCartPrice2(43, 64,22));     //[ 22 ]

function showObjDetail(anyObj){
    console.log(`Name of the item is: ${anyObj.itemName}, and its Price is: ${anyObj.price}`);
}

const itemObj = {
    itemName: "Apples",
    price: 4454,
    inStock: true
}
showObjDetail(itemObj)

