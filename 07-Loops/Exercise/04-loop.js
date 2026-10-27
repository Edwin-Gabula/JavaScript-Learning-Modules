const readline = require("node:readline/promises");

const { stdin, stdout } = require("node:process");

const rl = readline.createInterface(
    {
        input: stdin,
        output: stdout
    }
);


async function main() {

    try {
        let numberOfMedicine = Number(await rl.question(
            "How many medicines are you selling: "
        ));

        console.log(
            "Number of medicines being sold are " + numberOfMedicine
        )

        for (let i = 0; i < numberOfMedicine; i ++ ) {

            console.log(
                "\nProcessing medicine number: ", i + 1
            );

            let medicineName = await( rl.question("Name of the drug: "));

            let unitPrice = Number(await( rl.question("What is the unit price of the medicine: ")
            ));

            let stock = Number(await( rl.question(
                "How many units are available: "
            )))

            let customerNeed = Number(await( rl.question(
                "How many units does the customer want: "
            )))

            // calculating the total cost

            let totalCost = customerNeed * unitPrice;

            // displaying results

            console.log(
                "-----SALES SUMMARY------"
            );

            console.log(
                "Medicine: ", medicineName
            );

            console.log(
                "Unit Price: UGX ", unitPrice
            );

            console.log(
                "Quantity Requested: ", customerNeed
            );

            console.log(
                "Available: ", stock
            );

            console.log(
                "Total cost: ", totalCost
            );


            // validating user inputs and process sales

            if (unitPrice <= 0) {
                console.log(
                    "Invalid price, must be greater than zero"
                );
            } else if (stock < 0) {
                console.log(
                    "Stock cannot be negative."
                )
            } else if (customerNeed <= 0) {
                console.log(
                    "Requested quantity cannot be less than zero"
                )
            } else if (customerNeed > stock) {
                console.log(
                    "Sale rejected, insufficient stock!"
                )
            } else {
                console.log(
                    "Sale accepted"
                );

                let remainingStock = stock - customerNeed

                console.log(
                    "Remaining stock is ", remainingStock
                )
            }

        }

    } finally {
        rl.close();
    }

}

main();