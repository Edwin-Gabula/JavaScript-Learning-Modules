// dispensing 3 bottles of a cough till its done

let stock = 15;

while (stock > 0) {
    console.log(
        "Dispensing medicine, remaining stock: ", stock
    )

    stock = stock - 3;
};

console.log(
    "Stock is finished!"
)