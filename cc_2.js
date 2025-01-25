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

// Task 3- Working with Objects 


// Task 4- Array of Objects 

let customers = [
    { name: "Samara", email: "samara@example.com", purchaseAmount: 60},
    {name: "Jenique", email: "jenique@example.com", purchaseAmount: 200},
    {name: "Nicholas", email: "nicholas@example.com", purchaseAmount: 400}
];
// New Customer added
customers.push({name: "Adija", email: "adija@example.com", purchasAmount: 30 });

console.log(customers);

// Customer Database
