"use strict";
//#3
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
//to lower case
let personsName = "Muhammad tahir Ali shaheer";
console.log(personsName.toLowerCase());
//to upper case
console.log(personsName.toUpperCase());
//to title case
let words = personsName.split(" ");
console.log(words);
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
