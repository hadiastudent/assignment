//#31
/*  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.

*/

let userNames: string[]=["admin", "Ali", "Hamza", "Haris","Daniyal"]
function greetusers(userNames:string[]){
    if(userNames.length===0){
        console.log(`we need to find some users.`)
    return;
}}
for(let userName of userNames)
{console.log(`Hello ${userName}, welcome to our company.`)}
console.log(`for non empty usersNames :\n.`)
greetusers(userNames);

//to make array empty we just assign empty array to userNames
userNames= [];
console.log(`\n\n for empty user names :\n`)
greetusers(userNames)
