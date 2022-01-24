import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// Declare a variable named plantSeed and export the 
// function
// The plantSeeds function has a paramter of plantingPlan
export const plantSeeds = (plantingPlans) => {
    // The plantingPlan is an array that contains 4 arrays
    // that represent the rows in the field
    // Iterate through both the plantingPlan array and the
    // 4 arrays inside of it by using a for lopp
    for (const plantPlan of plantingPlans) {
        for (const plant of plantPlan) {
            if ( plant === "Asparagus" ) {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if ( plant === "Corn" ) {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            }
            else if ( plant === "Potato" ) {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if ( plant === "Soybean" ) {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if ( plant === "Sunflower" ) {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if ( plant === "Wheat" ) {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
}