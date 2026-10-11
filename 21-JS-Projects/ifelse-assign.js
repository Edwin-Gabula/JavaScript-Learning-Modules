
const readline = require("node:readline/promises");

const { stdin, stdout } = require("node:process");

const rl = readline.createInterface(
    {
        input: stdin,
        output: stdout
    }
)

let medicine = await rl.question(
    "Enter the medicine name: "
);

let stock = Number(await rl.question(
    "Enter stock available: "
));