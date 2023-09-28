//#21
//. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let bouquet  = 
{ name : `Red rose`,
    price: 500,
    description: `beautiful arrangement of red rose.`}

// define an array of objects
let bouquets: Array<typeof bouquet>=[]

//storing objects in array
bouquets.push(bouquet);

// object 2
let bouquet1={
    name : `summer bliss`,
    price: 200,
    description: `beautiful arrangement of summer bliss.`}
bouquets.push(bouquet1)

//object 3
let bouquet2={
    name : `Red hot`,
    price: 600,
    description: `beautiful arrangement of red hot flowers.`}

    bouquets.push(bouquet2)
console.log(bouquets)

//function to display array of bouquet
 function displaybouquets (bouquets: Array<typeof bouquet>){
    for(let i of bouquets)
    {console.log(`title : ${i.name}`, 

    `price:${i.price}`,

    `description:${i.description}`,

    `\u2014,
     \n`)
    
}}
displaybouquets(bouquets);
