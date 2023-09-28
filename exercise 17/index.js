"use strict";
//#17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
//step1 
let msg = `I can invite only two people for dinner.`;
console.log(msg);
//step#2
//remove guests from list
let guest_list = ["Saira", "maha", "sidra", "hadia", "maryam", "zahra", "sundus"];
while (guest_list.length > 2) {
    let removeGuests = guest_list.pop();
    console.log(`Sorry ${removeGuests}, i can't invite you to dinner`);
}
//step#3
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guest_list) {
    console.log(`Hello ${guest}, you are still invited to dinner.`);
}
//step#4
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest_list.pop();
guest_list.pop();
//empty guest_list
console.log(`guest_list at the end`, guest_list);
