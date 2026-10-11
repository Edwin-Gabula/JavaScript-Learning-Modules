let medicine = prompt(
    "Enter the name of the medicine:"
);

let stock = Number(prompt(
    "Enter available stock: "
));

let quantityRequested = Number(prompt(
    "Enter quantity requested: "
));

let customerAmount = Number(prompt(
    "Enter the amount customer has: "
));

let unitPrice = Number(prompt(
    "Enter the unit price of the medicine: "
));


let totalCost = unitPrice * quantityRequested;

if (quantityRequested > stock) {
    console.log(
        "Insufficient stock, available is: " + stock
    )
} else if (totalCost > customerAmount) {
    console.log(
        "Customer has insuffiecient balance"
    )
} else {

    let change = customerAmount - totalCost

    console.log(
        "Sale accepted, medicine: " + medicine + ", quantity: " + quantityRequested + ", total price: " + totalCost + ", change is " + change
    )
}