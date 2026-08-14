// recording stock movements

const openingStock = 2000;
let dispensed = 375;
let received = 500;

let finalStock;

finalStock = openingStock - dispensed + received;

// print the final stock

console.log(
    "Final Stock: ", finalStock
);
