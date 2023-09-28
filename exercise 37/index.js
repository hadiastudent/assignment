"use strict";
//#37
/*. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size = "Large", message = "I love Typescript.") {
    console.log(`Shirts are ${size} in size, with a message ${message}`);
}
make_shirt();
//medium shirt 
make_shirt("Medium");
//any size with different message
make_shirt("Small", "Typescript is awesome.");
