/*
program to print variables assigned
to them within the program
*/

const medicineName = "Amlodipine";
const brandName = "Amlovas";

// assigning the stock quantity available
let stockAvailable = 150;

let unitPrice = 1000;   //unit price of the medicine

// printing the output of the above program

console.log(
    "Medicine Name: " + (
        medicineName
    )
);

console.log(
    "Brand Name: " + (
        brandName
    )
);

console.log(
    "Stock Available: " + (
        stockAvailable
    )
);

console.log(
    "Unit Price: " + (
        unitPrice
    )
)

// calculating the total stock value
console.log(
    "The total stock value is " + (
        unitPrice * stockAvailable
    )
)