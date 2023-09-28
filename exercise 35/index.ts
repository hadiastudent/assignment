//#35
/* Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
let Animals:string[]=["Dog", "Cat","Goat"]
console.log(`Names of the animals.`)
for(let animal of Animals){
    console.log(animal);
}
console.log(`\n Statement about these animals:`)
for(let animal of Animals){
if (animal==="Dog"){
    console.log(`A ${animal} would make a great pet.`)}

else if (animal==="Cat"){
    console.log(`A ${animal} is a loving pet. `)}

else if(animal==="Goat")
{console.log(`A ${animal} is an adorable pet that also give us milk. `)}}

console.log(`\n Any of these animals would make a great pet!. `)