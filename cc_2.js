// Task 1- Working with Arrays

let products = ["Mascara", "Foundation", "Concealer", "Highlight", "Blush"];

// New product added 
products.push("Eyeliner");

// Last product removed 
products.pop();

console.log(products);
// Store Inventory

// Task 2- Modifying Arrays 

let scores = [58, 92, 99, 64,80];
scores[1] = 90;

let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

console.log("Updated Scores:", scores);
console.log("Average Scores:", average);

// Student Scores 