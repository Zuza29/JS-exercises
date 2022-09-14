// ----------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------

// TERNARY OPERATORS

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

let userName = '';

userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

// -----------------------------------------------------------------------------------------------

// BASIC FUNCTIONS

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

// --------------------------------------------

// SPREAD & REST

function calculateTotalPrice(products, delivery, ...args) {
    let sum = products + delivery;
    for (const number of args) sum += number;
    let priceWithoutServices = sum - args;
    return sum;
}
 
