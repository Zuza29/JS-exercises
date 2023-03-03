const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const arrowBtn = document.querySelector('body > div > section > button');
const arrowImg = document.querySelector('body > div > section > button > div');
const buttonControls = document.querySelector('.button-container');
let imgSize = 300;

const scroll = () => {
    arrowBtn.scrollIntoView();
};

const imgToggle = () => {
    item1.classList.toggle('show');
    item1.style.marginBottom = '5vh';
    if (item1.classList.contains('show')) {
        arrowImg.style.transform = "rotate(180deg)";
        setTimeout(scroll, 400);
        buttonControls.style.display = 'none';
    } else {
        arrowImg.style.transform = "rotate(0)";
        buttonControls.style.display = 'flex';
        window.scrollTo(0, 0);
    };
};

const clickHandler = e => {
    if (e.target.classList.contains('plus')) {
        item2.style.height = imgSize + 70 + 'px';
        imgSize += 30;
    }
    else if (e.target.classList.contains('minus')) {
        if (imgSize < 200) {
            return;
        }
        item2.style.height = imgSize - 70 + 'px';
        imgSize -= 30;
    }
}

arrowBtn.addEventListener('click', imgToggle);
[...buttonControls.children].forEach(btn => {
    btn.addEventListener('click', clickHandler)
})