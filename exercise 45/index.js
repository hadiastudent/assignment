"use strict";
//#45
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
//example usage
const myCar = createCar("Toyota", "Corolla", ["color", "red"], ["optionalFeature", "sunroof"]);
console.log(myCar);
