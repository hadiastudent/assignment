"use strict";
//#20
/*
20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

*/
let countries = ["United States",
    "Canada",
    "Australia",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "India",
    "Brazil",
    "South Africa",
];
console.log(`List of countries:`);
for (let country of countries) {
    console.log(country);
}
