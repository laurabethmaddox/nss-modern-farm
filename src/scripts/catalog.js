// Declare a variable named catalog and export the function
// The catalog function has a parameter of the 
// harvestedFoodArray
export const catalog = (newArray) => {
    // Iterate through the newArray
    for (const food of newArray) {
        document.querySelector(".container").innerHTML += `<section class="plant">${food.name}</section>`
    }
}