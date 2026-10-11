// nested if statements

let stock = 0;

let prescription = true;

if (stock > 0) {
    console.log(
        "Medicine is available"
    );

    if (prescription === true) {
        console.log(
            "Prescription is available"
        );
    }

    console.log(
        "Medicine can be dispensed"
    )

} else {
    console.log(
        "Medicine cannot be dispensed"
    )
}