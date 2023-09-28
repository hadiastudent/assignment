//#16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/


let guest_list: Array<string> = ["maha", "sidra", "maryam", "Zahra"]


//step #1
for(let guest of guest_list){
    console.log(`dear ${guest}, we have found a big dinner table`)}

//step#2
//add new guest at beggining 
let newGuestAtBeginning : string= "Saira"

guest_list.unshift(newGuestAtBeginning)
//console.log(guest_list)

//step#3
//add new guest at middle 
let newGuestAtMiddle : string= "Hadia"
let middleIndex : number= Math.floor(guest_list.length/2)
guest_list.splice(middleIndex,0, newGuestAtMiddle)
//console.log(guest_list)

//step#4 add new guest at the end 
let newGuestAtEnd :string= "Sundus"
guest_list.push(newGuestAtEnd)
console.log(guest_list)

//step#5
/.log("new set of invitations")
for(let guest of guest_list){
  console.log(`Dear ${guest}, you are invited to dinner`)
}