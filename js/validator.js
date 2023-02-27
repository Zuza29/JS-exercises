
const pass = document.querySelector('#password');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 6;
const info = document.querySelector('.validator-info')


const inputHandler = () => {
    if (pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        info.textContent = 'Your password is very strong';
        info.style.backgroundColor = 'lime';
    } else if (pass.value.match(letters) && pass.value.match(numbers)) {
        info.textContent = 'Your password is strong';
        info.style.backgroundColor = 'lightgreen';
    } else {
        info.textContent = 'Your password is too weak';
        info.style.backgroundColor = 'red';
    }
};

const checkPassword = () => {
    if (pass.value.trim() === '') {
        info.attributeStyleMap.clear();
        info.innerHTML = 'Please enter a password that contains at least <strong>6 characters, including at least 1 letter and 1 number.</strong>';
    } else if (pass.value.length < minValue) {
        info.textContent = 'Your password is too short';
        info.style.backgroundColor = 'gold';
    } else {
        inputHandler()
    }
};

pass.addEventListener('keyup', checkPassword);



