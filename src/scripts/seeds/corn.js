// Declare a variable named create corn and export the 
// function
export const createCorn = () => {
    // Declare a variable named corn that holds an array 
    // of 2 identical objects with the same 
    // type, height, and output properties
    let corn = {type: "Corn", height: 180, output: 6}
    // Return the value of the variable corn
    return [corn, corn]
}