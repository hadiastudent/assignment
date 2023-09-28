"use strict";
//#44
/*. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log(`You ordered an empty sandwich.Please add some items.`);
    }
    else {
        console.log(`Summary Sandwich:`);
        console.log(`Bread :Sliced`);
        console.log(`Items:`);
        for (let item of items) {
            console.log(`-${items}`);
        }
        console.log(`Enjoy the sandwich.`);
    }
}
//call the function three times
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich();
