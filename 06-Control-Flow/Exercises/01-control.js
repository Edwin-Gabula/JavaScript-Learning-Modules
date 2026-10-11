
const readline = require("node:readline/promises");

const { stdin, stdout } = require("node:process");

const rl = readline.createInterface({ input: stdin, output: stdout });

async function main() {

    let medicine = await rl.question("Enter the name of the medicine: ");

    let stock = Number(await rl.question("Enter available stock: "));

    let quantityRequested = Number(await rl.question("Enter quantity requested: "));

    let customerAmount = Number(await rl.question("Enter the amount customer has: "));

    let unitPrice = Number(await rl.question("Enter the unit price of the medicine: "));

    let totalCost = unitPrice * quantityRequested;

    if (quantityRequested > stock) {

        console.log("Insufficient stock, available is: " + stock);

    } else if (totalCost > customerAmount) {

        console.log("Customer has insufficient balance");

    } else {
        
        let change = customerAmount - totalCost;

        console.log(
            "Sale accepted, medicine: " + medicine +
            ", quantity: " + quantityRequested +
            ", total price: " + totalCost +
            ", change is " + change
        );
    }

    rl.close();
}

main();
