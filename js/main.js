const numberGenerator = (max) => {
    return Math.floor(Math.random() * (max + 1));
};

const queryGenerator = () => {
    return {
        numberOne: numberGenerator(10),
        numberTwo: numberGenerator(10),
        operator: ["+", "-", "x"][numberGenerator(2)]
    }
};

let state = {
    score: 0,
    wrongAnswers: 0,
}

const queryUpdate = () => {
    state.currentQuery = queryGenerator();
}