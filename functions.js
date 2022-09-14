function calculateArea(width, height) {

    if (width === height) {
        let squareArea = Math.pow(width, 2);
        console.log("I'm a square!");
        return squareArea;
    }

    let rectangleArea = width * height;
    console.log("I'm a rectangle!");
    return rectangleArea;

}

// Spread & rest

function calculateTotalPrice(products, delivery, ...args) {
    let sum = products + delivery;
    for (const number of args) sum += number;
    let arrayOfArgs = array.from(args);
    return priceWithoutServices;
}

console.log(calculateTotalPrice(3, 5, 2, 1, 2));