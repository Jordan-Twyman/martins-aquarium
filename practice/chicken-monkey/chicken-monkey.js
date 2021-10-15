console.log("Welcome to the main module")
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 35 !== 0 ) {
        console.log(currentNumber,"chicken")
    }
    if (currentNumber % 7 === 0 && currentNumber % 35 !== 0) {
        console.log(currentNumber, "monkey")
    } 
    if  (currentNumber % 35 ===0){
        console.log(currentNumber, "chicken moneky")
    }
    else if (currentNumber % 5 !==0 && currentNumber % 7 !== 0 )  {
        console.log(currentNumber) 
    }
}


// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// let bandNumber = 1

// const takeNumber = function (bandName) {
//     let result = `${bandNumber} ${bandName}`;
//     bandNumber++;
//     return result;
//     /*
//         Write your awesome code here. See comments
//         below for what should be returned.
//     */
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// // const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console


const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: true,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];


function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i++){
    grill(foods[i])
}
console.log(cookedFood)

// This function has to MAKE something-- it calculates an order total and spits it back out so other functions can use it
// function calculateOrderTotal(orderArray){
//     let sum = 0;

//     for(let i = 0; i < order.length; i++){
//         sum += order[i].price
//     }

//     return sum;
// }

// // This function DOES something-- it prints the order total to the DOM
// function printOrderTotal(orderTotal){
//     document.querySelector("#order-total").innerHTML = orderTotal;
// }

// const currentOrder = [
//     {
//         name: "Latte",
//         size: "M",
//         price: 3.99
//     },
//     {
//         name: "Americano",
//         size: "S",
//         price: 2.99
//     }
// ]

// // Calculate the total price for this order and store it in the totalPrice variable
// const totalPriceForThisOrder = calculateOrderTotal(currentOrder);

// // Pass the totalPrice into the function that can print it
// printOrderTotal(totalPriceForThisOrder)



