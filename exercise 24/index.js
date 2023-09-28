"use strict";
//#24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let word1 = "Come";
let word2 = "Go";
console.log(word1 == word2);
console.log(word1 !== word2);
let str1 = "Hello";
let str2 = "hello";
console.log(str1.toLocaleLowerCase() == str2);
console.log(str2.toLocaleLowerCase() == str1);
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
let number1 = 5;
let number2 = 10;
console.log(number1 == number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
//Tests using "and" and "or" operators
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);
console.log(x < y || y < z);
console.log(x > y && y < z);
console.log(x > y || y > z);
// Test whether an item is in a array
let animals = [`cat`, `elephant`, `dog`, `horse`, `donkey`];
console.log(animals.includes(`elephant`));
//Test whether an item is not in a array.
console.log(animals.includes(`zebra`));
