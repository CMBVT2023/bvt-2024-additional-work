const userXPDisplay = document.getElementById('user-xp');
const userHealthDisplay = document.getElementById('user-health');
const userGoldDisplay = document.getElementById('user-gold');

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');

const gameTitleDisplay = document.getElementById('game-info-title');
const gameTextDisplay = document.getElementById('game-info-text');
const gameImagesDisplay = document.getElementById('game-assets');

let userXp = 0;
let userHealth = 100;
let userGold = 50;

let weapons = [
    {
        name: "Stick",
        attackPower: 2,
        holdingPower: 1,
    },
    {
        name: "Sword",
        attackPower: 6,
        holdingPower: 4,
    },
    {
        name: "Hammer of a Thousand Suns",
        attackPower: 12,
        holdingPower: 8,
    },
    {
        name: "Laser Tag Super Weapon",
        attackPower: 18,
        holdingPower: 10,
    },
    {
        name: "Console Commands",
        attackPower: 20,
        holdingPower: 16,
    },
];
let currentWeapon = 0;
let userInventory = [];

let enemyHealth = 0;
let enemyAttack = 0;
let enemyXpDrop = 0;

let potentialItems = ["keys", "cat shirt", "arcade token", "shoes"]

// Make it a random chance to go to the arcade or laser tag,
// Arcade will allow xp gain while taking less damage and laster tag will result in faster xp but high damage in return.

const locations = [
    {
        name: "Parking Lot",
        buttons: ["Go to the mall", "Find something to hit", "Challenge the elder"],
        buttonFunctions: [shop, fight, finalBoss],
        text: "You are back in the parking lot, and like usual you are met with three options to choose from."
    },
    {
        name: "Mall",
        buttons: ["Buy a new weapon (40 Gold)", "Sell Items", "Go back to the parking lot"],
        buttonFunctions: [buyWeapon, sellItem, parkingLot],
        text: "You end up at the mall and here you can buy a variety of weapons or sell the items you have obtained."
    },
    {
        name: "Food Court",
        buttons: ["Buy food (30 Gold)", "Buy a drink (10 Gold)", "Leave"],
        buttonFunctions: [buyFood, buyDrink, parkingLot],
        text: "You end up at the food court and here you can buy some food or a drink to regain some health."
    },
    {
        name: "Laser Tag",
        buttons: ["Play with the older kids", "Play with the younger kids", "Run"],
        buttonFunctions: [olderKids, youngerKids, parkingLot],
        text: "You find yourself at the laser tag arena, this is a great place to strike some people down with your lasers. You have the choice of either joining a game with some of the older kids or some of the younger kids. You could also just run away as fast as you can if that is your thing."
    },
    {
        name: "Arcade",
        buttons: ["Play", "Watch someone else play", "Leave"],
        buttonFunctions: [arcadePlay, arcadeView, parkingLot],
        text: "You find yourself at the arcade, this is a great place to dominate the competition by getting the high score."
    },
    {
        name: "Final Boss Arena",
        buttons: ["Attack", "Dodge and strike", "Ask the boss to leave"],
        buttonFunctions: [finalAttack, finalDodge, finalLeave],
        text: "Are you sure you can do this because it might be too late to back out now."
    },
    {
        name: "Older Kids",
        buttons: ["Attack", "Dodge and strike", "Leave"],
        buttonFunctions: [laserAttack, laserDodge, parkingLot],
        text: "This game is intense, it is far more than you were expecting but you ready your weapon for whats to come.."
    },
    {
        name: "Younger Kids",
        buttons: ["Attack", "Dodge and strike", "Leave"],
        buttonFunctions: [laserAttack, laserDodge, parkingLot],
        text: "Ok, this game isn't too bad but don't underestimate these kids, they have some serious stamina."
    },
]

function updateInterface(area) {
    gameTitleDisplay.innerHTML = area.name;
    gameTextDisplay.innerHTML = area.text;

    button1.innerHTML = area.buttons[0]
    button2.innerHTML = area.buttons[1]
    button3.innerHTML = area.buttons[2]

    button1.onclick = area.buttonFunctions[0]
    button2.onclick = area.buttonFunctions[1]
    button3.onclick = area.buttonFunctions[2]
}

function shop() {
    let randomNum = Math.ceil(Math.random() * 2);

    if (randomNum > 1) {
        updateInterface(locations[1]);
    } else {
        updateInterface(locations[2]);
    };
}

function fight() { 
    let randomNum = Math.ceil(Math.random() * 2);

    if (randomNum > 1) {
        updateInterface(locations[3]);
    } else {
        updateInterface(locations[4]);
    };
}

function parkingLot() {
    updateInterface(locations[0]);
}

function finalBoss() {
    updateInterface(locations[5])
}

function buyWeapon() {
    if (userGold >= 40) {
        currentWeapon++

        gameTitleDisplay.innerHTML = "New Weapon Acquired!";
        gameTextDisplay.innerHTML = `You have acquired a new weapon. You now have a ${weapons[currentWeapon]}.`;

        userGold -= 40;
        userGoldDisplay.innerHTML = userGold;
    } else {
        gameTitleDisplay.innerHTML = "You are Broke!";
        gameTextDisplay.innerHTML = "You do not have enough gold to buy a new weapon.";
    }
}

function sellItem() {
    if (userInventory.length > 0) {
        let sold = userInventory.pop();

        switch (sold) {
            case "keys": {
                gold += 35;
                userGoldDisplay.innerHTML = userGold;

                gameTitleDisplay.innerHTML = "You Sold Some Keys You Found";
                gameTextDisplay.innerHTML = `You gained 35 gold!`;

                break;
            };
            case "cat shirt": {
                gold += 25;
                userGoldDisplay.innerHTML = userGold;

                gameTitleDisplay.innerHTML = "You Sold a Cat Shirt You Found";
                gameTextDisplay.innerHTML = `You gained 25 gold!`;

                break;
            };
            case "arcade token": {
                gold += 5;
                userGoldDisplay.innerHTML = userGold;

                gameTitleDisplay.innerHTML = "You Sold an Arcade Token You Found";
                gameTextDisplay.innerHTML = `You gained 5 gold!`;

                break;
            };
            case "shoes": {
                gold += 40;
                userGoldDisplay.innerHTML = userGold;

                gameTitleDisplay.innerHTML = "You Sold a Pair of Shoes You Found";
                gameTextDisplay.innerHTML = `You gained 40 gold!`;

                break;
            };
        }
    } else {
        gameTitleDisplay.innerHTML = "You have Nothing to Sell";
        gameTextDisplay.innerHTML = "You have not acquired anything on your journey so far.";
    }
}

function buyFood() {
    if (userGold >= 30) {
        let randomNum = Math.ceil(Math.random() * 20) + 10;

        gameTitleDisplay.innerHTML = "Health Recovered!";
        gameTextDisplay.innerHTML = `You have acquired a some food and gained back ${randomNum} Health.`;

        userHealth += randomNum;
        userHealth.innerHTML = userHealth;

        userGold -= 30;
        userGoldDisplay.innerHTML = userGold;
    } else {
        gameTitleDisplay.innerHTML = "You are Broke!";
        gameTextDisplay.innerHTML = "You do not have enough gold to buy food.";
    }
}

function buyDrink() {
    if (userGold >= 10) {
        let randomNum = Math.ceil(Math.random() * 5) + 5;

        gameTitleDisplay.innerHTML = "Health Recovered!";
        gameTextDisplay.innerHTML = `You have acquired a drink and gained back ${randomNum} Health.`;

        userHealth += randomNum;
        userHealth.innerHTML = userHealth;

        userGold -= 10;
        userGoldDisplay.innerHTML = userGold;
    } else {
        gameTitleDisplay.innerHTML = "You are Broke!";
        gameTextDisplay.innerHTML = "You do not have enough gold to buy food.";
    }
}

function olderKids() {
    updateInterface(locations[6]);

    loadEnemy(50, 15, 25)
}

function youngerKids() {
    updateInterface(locations[7]);
}

function loadEnemy(hitPoints, attack, xpDrop) {
    enemyHealth = hitPoints;

    enemyAttack = Math.ceil(Math.random() * userXp) + attack; 
    
    enemyXpDrop = Math.ceil(Math.random() * attack) + xpDrop;
}

function laserAttack() {
    if (gameTitleDisplay.innerHTML === "Older Kids") {

        console.log(enemyHealth)
        
        enemyHealth -= weapons[currentWeapon].attackPower + Math.ceil(Math.random() * userXp);

        userHealth -= enemyAttack;

        if (enemyHealth <= 0) {
            userXp += enemyXpDrop;
            userXPDisplay.innerHTML = userXp;

            updateInterface(locations[0]);

            gameTitleDisplay.innerHTML = "You Won the Fight!";
            gameTextDisplay.innerHTML = `You won and received ${enemyXpDrop} xp in return. You return to the parking lot after winning.`;
        }
    }
}

function laserDodge() {

}

function arcadePlay() {

}

function arcadeView() {
     
}

function finalAttack() {

}

function finalDodge() {

}

function finalLeave() {

}

function resetGame() {
    userXp = 0;
    userHealth = 100;
    userGold = 50;

    currentWeapon = 0;
    userInventory = [];

    userXPDisplay.innerHTML = userXp;
    userGoldDisplay.innerHTML = userGold;
    userHealthDisplay.innerHTML = userHealth;

    parkingLot();
}

resetGame()