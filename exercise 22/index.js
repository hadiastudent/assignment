"use strict";
//#22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste
    };
}
let fruits = [
    createFruit("apple", "red", "sour"),
    createFruit("mango", "yellow", "sweet"),
    createFruit("banana", "yellow", "sweet"),
    createFruit("grapes", "green", "sour"),
    createFruit("apricot", "peach", "sour")
];
let invalidIndex = 10;
console.log(`Fruits at index ${invalidIndex}`, fruits[invalidIndex]);
//print the fruits
fruits.forEach((fruits) => { console.log(`Name: ${fruits.name},`, `Color: ${fruits.color},`, `Taste: ${fruits.taste}`); });
