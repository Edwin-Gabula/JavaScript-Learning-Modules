// program to run through medicines in a pharmacy

const readline = require("node:readline/promises");

const { stdin, stdout } = require("node:process");

const rl = readline.createInterface(
    {
        input: stdin,
        output: stdout
    }
);

async function main () {

    try {
        console.log(
            "Processing pharmacy sales"
        );

    } finally {
        console.log(
            "Closing the program!"
        )
    }
}

main()
