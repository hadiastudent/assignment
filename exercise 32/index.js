"use strict";
//#32
/*. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
//step 1
let current_users = [`hadia`, `fatima`, `Simra`, `Maliha`, `Amna`];
let new_users = [`neha`, `roha`, `haDia`, `Fatima`, `farah`, `maham`];
//step 2
let current_usersLower = current_users.map(users => users.toLowerCase());
//step 3  Loop through the newUsers list and check for uniqueness
for (let newuser of new_users) {
    let newuserLower = newuser.toLowerCase();
    if (current_usersLower.includes(newuserLower)) {
        console.log(`Sorry the username ${newuser} is already taken. Please choose a diifferent one.`);
    }
    else {
        console.log(`The username ${newuser} is available.`);
    }
}
//// Step 1: Create a list of current users and new users
