// loops is JS

let stockLevels = [0,4,25,8,60];

for ( let i = 0; i < stockLevels.length; i ++) {

    let stock = stockLevels[i];

    if (stock === 0) {
        console.log(
            "Out of Stock"
        );
    } else if (stock <= 10) {
        console.log(
            "Low stock"
        );
    } else {
        console.log(
            "Stock is available"
        )
    }
}
