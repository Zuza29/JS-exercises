// OBJECTS & FOR-IN LOOPS

const myFavouriteBook = {
    title: "The Witcher",
    volumes: 7,
    author: "Andrzej Sapkowski",
    genres: ["fantasy", "adventure", "dark fantasy"],
    language: "Polish",
    isAvailable: true,
    isIncomplete: false,
    mainCharacters: ["Geralt of Rivia", "Cirilla of Cintra", "Yennefer of Vengerberg", "Dandelion"],
    myFavouriteCharacter: "Ciri",
    myRating: 9.5,
}

const pcGame1 = {
    title: "The Witcher",
    studio: "CD Projekt Red",
    publishedInCentury: 21,
    receivedAwards: true,
}

const pcGame2 = { ...pcGame1, title: "The Witcher 2: Assassins of Kings" };
const pcGame3 = { ...pcGame1, title: "The Witcher 3: The Wild Hunt" };

console.log(`The first game in The Witcher franchise is called ${pcGame1.title}. The second one is titled ${pcGame2.title}, whereas
the third one ${pcGame3.title}.`)

// Destructurisation

const { title, studio, publishedInCentury, receivedAwards } = pcGame1; // 
console.log(title, studio, publishedInCentury, receivedAwards); // logs all these consts

// Object-related functions

// Function that iterates through all the keys and values in an object

for (const keys in myFavouriteBook) {
    console.log(keys); // logs keys (title, volumes, author etc.)
    console.log(myFavouriteBook[keys]); // logs values ("The Witcher", 7, Andrzej Sapkowski etc.)
}

// ---------------------------------------------------------------------

// Declare a const consisting of an array of objects - potions
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],

// Get all potions function
    
    getPotions() {
        return this.potions;
    },

// Add a new potion unless it already exists in the array

    addPotion(newPotion) {
        for (const potion of this.potions) { // for loop - iterate through allt he potions
            if (potion.name === newPotion.name) { // if there is the same potion 
                console.log(
                    `Error! Potion ${potion.name} is already in your inventory!` // log error
                );

                return `Error! Potion ${potion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion); // otherwise push the potion into the array
        
    },

// Remove a potion from the array
    
    removePotion(potionName) {
        return (this.potions = [
            ...this.potions.filter((potion) => potion.name !== potionName),
        ]);
    },
    updatePotionName(oldName, newName) {
        this.potions = [
            ...this.potions.map((potion) => {
                if (potion.name === oldName) {
                    return { ...potion, name: newName };
                } else {
                    return { ...potion };
                }
            }),
        ];
    },
    // Change code above this line
};

 atTheOldToad.addPotion({ name: "Dragon breath", price: 780 });
 atTheOldToad.removePotion("Dragon breath");
 console.log(atTheOldToad.getPotions());

