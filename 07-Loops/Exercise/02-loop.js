// program to perform pharmacy sales by asking the user
// various inputs

const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const rl = readline.createInterface(
    {
        input: stdin,
        output: stdout
    }
)

async function main() {

    let numberOfMedicine = Number(await rl.question("How many medicines are you selling: "))

    let medicineName = await rl.question("Name of the drug: ");

    let unitPrice = Number(await rl.question("What is the unit price of the item: "));

    let stock = Number(await rl.question("How many stock items are available: "));

    let customerNeed = Number(await rl.question("How many units does the customer want: "));

    let totalCost = customerNeed * unitPrice;

    console.log(
        "\n----SALES SUMMARY-----"
    );

    console.log(
        "Medicine: " + medicineName
    );

    console.log(
        "Quantity Requested: " + customerNeed
    );

    console.log(
        "Available stock: " + stock
    );

    // validating the user input

    if (unitPrice <= 0) {
        console.log(
            "Invalid price, unit price must be greater than zero"
        )
    } else if (stock < 0) {
        console.log(
            "Invalid stock, stock cannot be a negative value"
        )
    } else if (customerNeed <= 0) {
        console.log(
            "Invalid quantity, quantity must be greater than zero"
        )
    } else if (customerNeed > stock) {
        console.log(
            "Sale rejected, insufficient stock"
        )
    } else {
        console.log(
            "Sale accepted"
        );

        console.log(
            "Total cost is UGX " + totalCost
        );

        let remaining_stock = stock - customerNeed

        console.log(
            "Remaining stock: " + remaining_stock
        )
    }

    }


main()

