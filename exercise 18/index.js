"use strict";
//#18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//step#1
//make an array which is not in alphabetic order
let favPlaces = ["Turkey", "Germany", "France", "United states", "Bali"];
//step#2
//array in original order
console.log("Original order :");
console.log(favPlaces);
//step#3
//Print your array in alphabetical order without modifying the actual list.
console.log(`\n array in alphabetic order without modifying the list `);
console.log([...favPlaces].sort());
//step#4
//Show that your array is still in its original order by printing it.
console.log(`\n Array is in its original order`);
console.log(favPlaces);
//step#5
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`\n Array in reverse alphabetical order without changing order of original list`);
console.log([...favPlaces].sort().reverse());
//step#6
//Show that your array is still in its original order by printing it again
console.log(`\n Array is still in its original order`);
console.log(favPlaces);
//step#7
// Reverse the order of your list. Print the array to show that its order has changed.
console.log(`\n order of array has changed`);
favPlaces.reverse();
console.log(favPlaces);
//step8
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`\n Back to original order`);
favPlaces.reverse();
console.log(favPlaces);
//step#9
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`\n order has been changed to alphabetic order`);
favPlaces.sort();
console.log(favPlaces);
//step#10
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log(`\n order in reverse alphabetic oreder`);
favPlaces.sort().reverse();
console.log(favPlaces);
