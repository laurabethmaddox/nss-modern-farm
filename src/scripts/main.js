import { usePlants } from "./field.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

// Declare a variable named yearlyPlan that has the value
// of the createPlan function which is imported from 
// plan.js module
const yearlyPlan = createPlan()

// Console log the variable yearlyPlan to output its value
console.log(yearlyPlan)

