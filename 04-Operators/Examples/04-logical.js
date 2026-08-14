/* 
check reorder quantities
*/

const stock = 80;
const reOrderLevel = 100;
const medicineActive = true;

// using the and operatot

console.log(
    "Needs reorder", stock < reOrderLevel && medicineActive === true
);


// using the OR operator
const payment = "Cash";

console.log(
    "Valid payment", payment === "Cash" || payment === "Mobile"
);


// using the NOT

const expired = false;

console.log(
    "Is expired", ! expired
);
