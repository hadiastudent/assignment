//#13

//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favourite_transportation: Array<[transport :string, brand:string ]>= []
favourite_transportation.push (["car" , "civic"])
favourite_transportation.push (["bike" , "honda"])
favourite_transportation.push (["bus" , "daewoo"])

favourite_transportation.forEach(([transport, brand])=> 
    {console.log(`I would like to own a ${brand} ,${transport}.`
        )})