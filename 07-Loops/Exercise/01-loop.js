// program to iterate through medicines to 
// printing their stock status

let medicines = [

    "Paractamol",

    "Amoxicillin",

    "Metformin",

    "Omeprazole",

    "Ciprofloxacin",

];

let stockLevel = [

    0,4,25,8,60

];

let totalStock = 0;

for ( let i = 0; i < medicines.length; i ++) {

    let medicine = medicines[i];

    let stock = stockLevel[i];

    if (stock === 0) {
        console.log(
            medicine + ": Out of stock"
        );
    } else if (stock <= 10) {
        console.log(
            medicine + ": Low stock"
        );

    } else {
        console.log(
            medicine + ": Stock available"
        )
    }

    totalStock = totalStock + stock;

};


console.log(
    "Total stock is " + totalStock + " units"
)