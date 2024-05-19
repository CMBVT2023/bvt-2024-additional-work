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

let potentialItems = ["keys", "cat shirt", "arcade token", "shoes"];

const locations = [
    {
        name: "Parking Lot",
        buttons: ["Go to the mall", "Find something to hit", "Challenge the elder"],
        buttonFunctions: [mall, playArea, finalBoss],
        text: "You are back in the parking lot, and like usual you are met with three options to choose from."
    },
    {
        name: "Mall",
        buttons: ["Go to the shopping center", "Go to the food court", "Go back to the parking lot"],
        buttonFunctions: [shoppingCenter, foodCourt, parkingLot],
        text: "You end up at the mall and here you can choose to go to the shopping center to buy and sell items or go to the food court to replenish health."
    },
    {
        name: "Shopping Center",
        buttons: ["Buy a new weapon (40 Gold)", "Sell Items", "Leave"],
        buttonFunctions: [buyWeapon, sellItem, mall],
        text: "You go to the shopping center and here you can buy a variety of weapons or sell the items you have obtained."
    },
    {
        name: "Food Court",
        buttons: ["Buy food (30 Gold)", "Buy a drink (10 Gold)", "Leave"],
        buttonFunctions: [buyFood, buyDrink, mall],
        text: "You end up at the food court and here you can buy some food or a drink to regain some health."
    },
    {
        name: "Play Area",
        buttons: ["Go to laser tag", "Go to the arcade", "Go back to the parking lot"],
        buttonFunctions: [laserTag, arcade, parkingLot],
        text: "You end up at the play area. From here you can either go to play laser tag or go to the arcade."
    },
    {
        name: "Laser Tag",
        buttons: ["Play with the older kids", "Play with the younger kids", "Run"],
        buttonFunctions: [olderKids, youngerKids, playArea],
        text: "You find yourself at the laser tag arena, this is a great place to strike some people down with your lasers. You have the choice of either joining a game with some of the older kids or some of the younger kids. You could also just run away as fast as you can if that is your thing."
    },
    {
        name: "Arcade",
        buttons: ["Play", "Watch someone else play", "Leave"],
        buttonFunctions: [arcadePlay, arcadeView, playArea],
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
    {
        name: "You Lose",
        buttons: ["Replay", "Replay", "Replay"],
        buttonFunctions: [resetGame, resetGame, resetGame],
        text: "Your health depleted and now you can no longer go on, restart the game to play."
    },
    {
        name: "You Win",
        buttons: ["Replay", "Replay", "Replay"],
        buttonFunctions: [resetGame, resetGame, resetGame],
        text: "You finally won the game by defeating the final boss and have now everyone in the area from their evil ways."
    },
];

function updateInterface(area) {
    gameTitleDisplay.innerHTML = area.name;
    gameTextDisplay.innerHTML = area.text;

    button1.innerHTML = area.buttons[0];
    button2.innerHTML = area.buttons[1];
    button3.innerHTML = area.buttons[2];

    button1.onclick = area.buttonFunctions[0];
    button2.onclick = area.buttonFunctions[1];
    button3.onclick = area.buttonFunctions[2];
}

function parkingLot() {
    updateInterface(locations[0]);
};

function mall() {
    updateInterface(locations[1]);
};

function shoppingCenter() {
    updateInterface(locations[2]);
};

function foodCourt() {
    updateInterface(locations[3]);
};

function playArea() { 
    updateInterface(locations[4]);
};

function laserTag() {
    updateInterface(locations[5]);
};

function arcade() {
    updateInterface(locations[6]);
};

function finalBoss() {
    updateInterface(locations[7]);
};

function buyWeapon() {
    if (userGold >= 40) {
        currentWeapon++;

        gameTitleDisplay.innerHTML = "New Weapon Acquired!";
        gameTextDisplay.innerHTML = `You have acquired a new weapon. You now have a ${weapons[currentWeapon].name}.`;

        userGold -= 40;
        userGoldDisplay.innerHTML = userGold;
    } else {
        gameTitleDisplay.innerHTML = "You are Broke!";
        gameTextDisplay.innerHTML = "You do not have enough gold to buy a new weapon.";
    };
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
        userHealthDisplay.innerHTML = userHealth;

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
        userHealthDisplay.innerHTML = userHealth;

        userGold -= 10;
        userGoldDisplay.innerHTML = userGold;
    } else {
        gameTitleDisplay.innerHTML = "You are Broke!";
        gameTextDisplay.innerHTML = "You do not have enough gold to buy food.";
    }
}

function olderKids() {
    updateInterface(locations[8]);

    loadEnemy(50, 15, 25);
}

function youngerKids() {
    updateInterface(locations[9]);

    loadEnemy(30, 8, 10);
}

function loadEnemy(hitPoints, attack, xpDrop, name) {
    enemyHealth = hitPoints;

    enemyAttack = Math.ceil(Math.random() * (userXp / 4)) + attack; 
    
    enemyXpDrop = Math.ceil(Math.random() * attack) + xpDrop;

}

function laserAttack() {
        enemyHealth -= weapons[currentWeapon].attackPower + Math.ceil(Math.random() * (userXp / 2));

        if (enemyHealth <= 0) {
            userXp += enemyXpDrop;
            userXPDisplay.innerHTML = userXp;

            let goldReturn = Math.ceil(Math.random() * (userXp / 2)) + 8; 

            userGold += goldReturn;
            userGoldDisplay.innerHTML = userGold;

            updateInterface(locations[0]);

            gameTitleDisplay.innerHTML = "You Won the Fight!";
            gameTextDisplay.innerHTML = `You won and received ${enemyXpDrop} xp and ${goldReturn} gold in return. You return to the parking lot after winning.`;
        } else {
            userHealth -= enemyAttack;
            if (userHealth <= 0) {
                userHealthDisplay.innerHTML = 0;
                updateInterface(locations[10]);
            } else {
                userHealthDisplay.innerHTML = userHealth;

                gameTitleDisplay.innerHTML = "Keep Fighting!";
                gameTextDisplay.innerHTML = `The enemy is taking damage, they have ${enemyHealth} health left.`;
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

    enemyHealth = 0;
    enemyAttack = 0;
    enemyXpDrop = 0;

    parkingLot();
}

resetGame()

// TODO: Have a 25% chance to receive a random item after fighting an enemy.
//  Create the chance to dodge and strike even, have dodging be a 75% chance and a 50% chance to get a hit in after wards
//  Create the arcade events
// Create the final boss fight
// 