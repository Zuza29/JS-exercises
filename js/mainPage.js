const arrowImg = document.querySelector('.arrow');
const arrowBtn = document.querySelector('.arrow-btn')

const scroll = () => {
    arrowBtn.scrollIntoView();
};

const arrowBtnToggle = () => {
    if (window.scrollY == 0) {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        arrowImg.style.transform = "rotate(180deg)";
    } else {
        arrowImg.style.transform = "rotate(0)";
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
};

arrowBtn.addEventListener('click', arrowBtnToggle);