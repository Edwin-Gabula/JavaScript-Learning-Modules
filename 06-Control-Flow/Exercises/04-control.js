// writing code to evaluate availabilit of medicine 
// and whether it can be dispensed or not

let stock = 100;

let prescription = true;

let OTC = false;

if (stock > 0 && prescription === true || OTC === true) {
    console.log(
        "Medicine can be dispensed"
    )
} else {
    console.log(
        "Medicine cannot be dispensed"
    )
}