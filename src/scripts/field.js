// Declare a variable named plantArray whose value is an 
// empty array
const plantArray = [ ]

// Declare a variable named addPlant and export the 
// function
// The addPlant function has a parameter of seedObj
export const addPlant = (seedObj) => {
    // Add the seedObj parameter to the array
    plantArray.push(seedObj)
}

// Declare a variable named usePlants and export the
// function
export const usePlants = () => {
    // Declare a variable named plantArrayCopy that holds the
    // value of the copy of the original plantArray array
    const plantArrayCopy = plantArray.map(plant => ({...plant}))
    // Return the value of the variable plantArrayCopy
    return plantArrayCopy
}