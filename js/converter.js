const input = document.querySelector('.converter-input');
const result = document.querySelector('.result');
const convertBtn = document.querySelector('body > div > section > button:nth-child(1)');
const switchBtn = document.querySelector('body > div > section > button:nth-child(2)');
const resetBtn = document.querySelector('body > div > section > button:nth-child(3)');
const heading = document.querySelector('h2');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

// °F = °C * 1.8 + 32
// °C = (°F - 32) * 5 / 9

const scaleToggle = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F';
        two.textContent = '°C';
    } else {
        one.textContent = '°C';
        two.textContent = '°F';
    }
};

const celsiusToFahrenheit = () => {
    const initValue = Math.floor(input.value);
    const tempResult = (initValue * 1.8 + 32).toFixed(1);
    result.textContent = `${initValue}°C equals ${tempResult}°F`;
    input.value = '';
};

const fahrenheitToCelsius = () => {
    const initValue = Math.floor(input.value);
    const tempResult = ((initValue - 32) * 5 / 9).toFixed(1);
    result.textContent = `${initValue}°F equals ${tempResult}°C`;
    input.value = '';
};

const inputHandler = () => {
    if (input.value !== '') {
        if (one.textContent === '°C') {
            celsiusToFahrenheit();
        } else if (one.textContent === '°F') {
            fahrenheitToCelsius();
        }
    } else {
        result.textContent = 'Please do not leave the input field empty'
    }
};

const reset = () => {
    input.value = '';
    result.textContent = '';
}

switchBtn.addEventListener('click', scaleToggle);
convertBtn.addEventListener('click', inputHandler);
resetBtn.addEventListener('click', reset);
