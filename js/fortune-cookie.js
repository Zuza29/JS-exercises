const randomFortune = [
    "It's better to be alone sometimes", "A dream you have will come true", "Your ability for accomplishment will follow with success", "Whatever your goal is in life, embrace it, visualize it, and it will be yours",
    "Keep your eye out for someone special", "If you have something good in your life, don't let it go", "Now is the time to try something new",
    "There is no greater pleasure than seeing your loved ones prosper", "If you learn from your mistakes... You will learn a lot today",
    "Everyone agrees. You are the best.", "A stranger is a friend you have not spoken to yet", "If you feel you are right, stand firmly by your convictions",
    "The greatest risk is not taking one", "Let the deeds speak", "When fear hurts you, conquer it and defeat it",
    "You already know the answer to the questions lingering inside your head", "You will conquer obstacles to achieve success",
    "Fortune favors the brave"
]

const btn = document.querySelector('.cookie-open');
const cookie = document.querySelector('.cookie');
const paper = document.querySelector('.box.shadow');
const heading = document.querySelector('.fortune-heading');
const fortuneParagraph = document.querySelector('p');

const open = () => {
    fortuneParagraph.textContent = randomFortune[Math.floor(Math.random() * randomFortune.length)]; 
    btn.textContent = 'Try again';
    cookie.style.display = 'none';
    paper.style.display = 'block';
    heading.textContent = 'Your fortune for today is...'
}

btn.addEventListener('click', open)