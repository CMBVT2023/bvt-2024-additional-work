const userAnimalSelection = document.getElementById('user-animal');
const userChoiceCheckBox = document.getElementById('user-choice');

const userSelectionDisplay = document.getElementById('user-selection-display');
const userChoiceDisplay = document.getElementById('user-choice-display');

function displayAnimal(value) {
    userSelectionDisplay.innerText = value;

    if (value != 'User has not decided on their animal yet.') {
        userChoice();
    } else {
    userChoiceDisplay.innerText = ``;

    }
}

function displayChoice(value, color) {
    userChoiceDisplay.innerText = value;

    userChoiceDisplay.style.color = `${color}`;
}

function animalSelected(e) {
    const animal = e.target.value;

    

    let animalDisplay = "User Has Selected A ";
    switch (animal) {
        case "dog":
        case "puppy": {
            animalDisplay += "Canis lupus familiaris";
            break;
        }
        case "cat":
        case "kitten": {
            animalDisplay += "Felis catus";
            break;
        }
        case "dolphin": {
            animalDisplay += "Delphinus";
            break;
        }
        default: {
            animalDisplay = "User has not decided on their animal yet.";
            break;
        }
    }

    displayAnimal(animalDisplay);
}

function userChoice() {
    const result = userChoiceCheckBox.checked;

    let choice = 'The User ';
    switch (result) {
        case true: {
            choice += 'likes this animal!';
            displayChoice(choice, '#009900')
            break;
        }
        case false: {
            choice += 'does not like this animal!';
            displayChoice(choice, '#FF0000')
            break;
        }
    }
}

function loadEventListeners() {
    userAnimalSelection.addEventListener('change', animalSelected.bind(this));
}

loadEventListeners();



// // Video Follow Along Example

// const favoriteAnimal = "bobCat";

// switch (favoriteAnimal) {
//     case "bobCat":
//     case "jaguar":
//     case "cat": {
//         console.log("Cats are cool!")
//         break;
//     } 
//     case "dog": {
//         console.log("Dogs are cool!")
//         break;
//     }
//     case "shark": {
//         console.log("Shark are cool!")
//         break;
//     }
//     default: {
//         console.log("I don't know that animal.")
//         break;
//     }
// };

// // If else statement method 

// if (favoriteAnimal === "cat") {
//     console.log("Cats are cool!")
// } else if (favoriteAnimal === "dog") {
//     console.log("Dogs are cool!")
// } else if (favoriteAnimal === "shark") {
//     console.log("Shark are cool!")
// } else {
//     console.log("I don't know that animal.")
// }