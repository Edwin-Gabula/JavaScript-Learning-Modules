/*
Ternary Operator
*/

const stock = 80;
const reorderLevel = 100;

const status = stock < reorderLevel
    ? "Reorder required"
    : "Stock sufficient";

console.log("Status:", status);