// program to determine if a medicine can be dispensed based on stock 

let medicine = "Paracetamol";

let stock = 34;

let reorderLevel = 10;

let unitPrice = 1500;

let expired = false;

let reorderQuantity = reorderLevel - stock;

if (expired === false) {
    console.log(
        "Medicine can be dispensed, - NOT EXPIRED"
    )

    if (stock === 0) {
        console.log(
            "Medicine is out of stock"
        )
    }

    if (stock <= reorderLevel) {
        console.log(
            "Reorder is required, quantity to order is " + reorderQuantity
        )
    } else {
        console.log(
            "Stock is ok, no reorder required"
        )
    }

} else {
    console.log(
        "Medicine cannot be dispensed"
    )
}