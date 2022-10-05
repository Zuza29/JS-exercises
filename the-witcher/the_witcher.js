const characters = [
    {
        name: 'Geralt of Rivia',
        occupation: 'hunt monsters',
        trait: 'just',
        src: 'https://cosplaytime.pl/uploads/2019/12/0uy51Pg6ESThY.jpg'
    },
    {
        name: 'Yennefer of Vengerberg',
        occupation: 'cast spells',
        trait: 'cunning',
        src: 'https://i.pinimg.com/originals/4f/70/d3/4f70d320d10c7a504b304231b874cd10.jpg'
    },
    {
        name: 'Triss Merigold',
        occupation: 'cast spells',
        trait: 'caring',
        src: 'https://gfx.gexe.pl/2015/6/18/195303.1434649983.jpg'
    },
    {
        name: 'Cirilla of Cintra',
        occupation: 'hunt monsters',
        trait: 'courageous',
        src: 'https://d-art.ppstatic.pl/kadry/k/r/e7/88/5ce106e75b176_o_full.jpg'
    },
    {
        name: 'Jaskier',
        occupation: 'write songs',
        trait: 'loyal',
        src: 'https://planetagracza.pl/wp-content/uploads/2021/05/wiedzmin-3-jaskier-modyfikacja.jpg'
    },
    {
        name: 'Emhyr var Emreis',
        occupation: 'rule Nilfgaard',
        trait: 'self-interested',
        src: 'https://pbs.twimg.com/media/Bsggq4GIcAANcV7.jpg:large'
    },
    {
        name: 'Foltest',
        occupation: 'rule Temeria',
        trait: 'secretive',
        src: 'https://www.gamelivestory.com/images/article/the-witcher-10-hidden-details-you-never-noticed-about-foltest-article-image2.webp'
    },
    {
        name: 'Milva Barring',
        occupation: 'shoot a bow masterfully',
        trait: 'determined',
        src: 'https://64.media.tumblr.com/398ce4c2c572bb298474dcb5fd2968f8/e50b51bea2f8e409-2d/s1280x1920/edac1769b857ff3b06b8fa2801dbf12718d0f8c9.png'
    },
    {
        name: 'Cahir',
        occupation: 'help Geralt on his quest',
        trait: 'honourable',
        src: 'https://i.ytimg.com/vi/O3hcd5vCX-4/maxresdefault.jpg'
    },
    {
        name: 'Emiel Regis',
        occupation: 'know the arcanes of potion-brewing',
        trait: 'wise',
        src: 'https://external-preview.redd.it/IS3TlZwN73CauEyAxj0y1ZezK_IcKNLlmfYbDRuMBsI.jpg?auto=webp&s=39f3dad0b1edfeccfc530f24b0aa7731d0b5d5b1'
    }
];

function getRandomInt() {
    const min = 1;
    const max = characters.length + 1;
    return Math.floor(Math.random() * (max - min) + min);
}

const createImagesAndMessages = (index, message) => {
    let imgEl = document.querySelector('img');
    const src = characters[index].src;
    if (imgEl) {
        imgEl.src = src;
        
    } else {
        imgEl = document.createElement('img');
        imgEl.src = src;
    }
    document.querySelector("span").innerText = message;
    document.body.appendChild(imgEl);
    imgEl.classList.add('image');
}


const returnRandomCharacter = (event) => {
    let index = getRandomInt() - 1;
    const message = `Your name is ${characters[index].name}, you ${characters[index].occupation} and you are ${characters[index].trait}!`;
    createImagesAndMessages(index, message);
};


document.getElementById("witcher-button").addEventListener("click", returnRandomCharacter);