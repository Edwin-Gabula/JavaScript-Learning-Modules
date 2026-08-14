/*
in this exercise we are going to calculate and print

1. Total stock value
2. Value of 100 tablets
3. Value of 500 tablets
*/

const medicineName = "Paracetamol - 500mg";
const quantity = 1250;
const unitPrice = 150;

// print the total stock value
console.log(
    "Stock value: ", quantity * unitPrice
);

//printing stock value ot 100 tablets
console.log(
    "Value of 100 tablets: ", unitPrice * 100
);

//print stock value of 500 tablets

console.log(
    "Value of 500 tables: ", unitPrice * 500
);