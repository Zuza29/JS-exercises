const btn = document.querySelector('.cookie-open');
const cookie = document.querySelector('.cookie');
const paper = document.querySelector('.box.shadow');
const heading = document.querySelector('.fortune-heading')

const open = () => {
    btn.textContent = 'Try again';
    cookie.style.display = 'none';
    paper.style.display = 'block';
    heading.textContent = 'Your fortune for today is...'
}

btn.addEventListener('click', open)