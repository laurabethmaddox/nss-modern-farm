// Declare a variable named harvestPlants and export the
// function
// The harvestPlants function has a paramter of plantArray
export const harvestPlants = (plantArray) => {
    // Declare a variable named newArray that has a value
    // of an empty array
    const newArray = [ ]

    // Then iterate trough the plantArray using a for loop
    // and get the value of each plants output
    for ( const plant of plantArray ) {
        if ( plant.type === "Corn" ) {
            for ( let i = 0; i < plant.output / 2; i++ ) {
                newArray.push(plant)
            } 
        } else {
            for ( let i = 0; i < plant.output; i++ ) {
                newArray.push(plant)
            }
        }
    }
    // Return the newArray of seed objects
    return newArray
}