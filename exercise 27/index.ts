//#27
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
let alien_clr : string=`green`

//version 1
if (alien_clr===`green`){
    console.log("the player just earned 5 points.")
}
else if(alien_clr===`yellow`){
    console.log("The player just earned 10 points ")
}
else if(alien_clr===`red`)
    {console.log("the player just earned 15 points")}
else{console.log("unknown alien_color")}

//version 2
alien_clr=`yellow`

if (alien_clr===`green`){
    console.log("the player just earned 5 points.")
}
else if(alien_clr===`yellow`){
    console.log("The player just earned 10 points ")
}
else if(alien_clr===`red`)
    {console.log("the player just earned 15 points")}
else{console.log("unknown alien_color")}

//version 3
alien_clr=`red`
if (alien_clr===`green`){
    console.log("the player just earned 5 points.")
}
else if(alien_clr===`yellow`){
    console.log("The player just earned 10 points ")
}
else if(alien_clr===`red`)
    {console.log("the player just earned 15 points")}
else{console.log("unknown alien_color")}

