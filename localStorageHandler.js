let appState = {
    username: "",
    theme: "sunset"
};

const input = document.querySelector("input");
const saveBtn = document.getElementById("save-btn");
const greeting = document.getElementById("greeting");

localStorage.setItem("appState", JSON.stringify(appState));
const savedSettings = JSON.parse(localStorage.getItem("appState"));


const savedName = (localStorage.getItem("username")) ? localStorage.getItem("username") : "Stranger";
greeting.innerHTML = `Welcome, ${savedName}`;

function clearInput () {
    input.value = "";
}

saveBtn.addEventListener("click", () => {
    let inputValue = input.value;
    localStorage.setItem("username", inputValue);
    greeting.innerHTML = `Welcome, ${inputValue}`;
    clearInput();
})