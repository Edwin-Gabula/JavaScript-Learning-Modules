let medicine = "Amoxicillin";

let stock = 0;

let quantityRequested = 2;

let unitPrice = 250;

let customerMoney = 100000;

let expired = false;

let totalPrice = quantityRequested * unitPrice;

if (expired) {
    console.log(
        "Sale rejected, medicine expired"
    )
} else if (stock === 0) {
    console.log(
        "Sale rejected, out of stock"
    )
} else if (quantityRequested > stock) {
    console.log(
        "Sale rejected, insufficient stock"
    )
} else if (customerMoney < totalPrice) {
    console.log(
        "Sale rejected, insufficient funds"
    )
} else {
    
    let change = customerMoney - totalPrice;

    console.log(
        "Sale accepted, medicine: " + medicine + ", quantity: " + quantityRequested + ", total price: " + totalPrice
        + ", change: " + change
    )
}