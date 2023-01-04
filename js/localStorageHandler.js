let appState = {
    username: ""
};

const input = document.querySelector("input");
const saveBtn = document.getElementById("save-btn");
const greeting = document.getElementById("greeting");

localStorage.setItem("appState", JSON.stringify(appState));
const savedSettings = JSON.parse(localStorage.getItem("appState"));

const savedName = (localStorage.getItem("username")) ? localStorage.getItem("username") : "Stranger";
greeting.innerHTML = `Welcome, ${savedName}`;

const clearInput = () => {
    input.value = "";
}

const handleInput = () => {
    let inputValue = input.value;
    localStorage.setItem("username", inputValue);
    inputValue ? greeting.innerHTML = `Welcome, ${inputValue}` : 'Welcome, Stranger';
    clearInput();
}

saveBtn.addEventListener("click", handleInput);
document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Enter") {
        handleInput();
    } else {
        return;
    }
})
