const userTextBox = document.getElementById('user-text-box-input');
const userNumber = document.getElementById('user-number-input')
const userRadios = document.getElementById('radios').querySelectorAll('input');
const userChecks = document.getElementById('checks').querySelectorAll('input');

const userTextDisplay = document.getElementById('user-text');
const userNumberDisplay = document.getElementById('user-number');
const userRadioDisplay = document.getElementById('user-radio');
const userChecksDisplay = document.getElementById('character');

function displayUserText(e) {
    if (e.target.value === '') {
        userTextDisplay.innerText = `Want to see a magic trick?`
    } else {
        userTextDisplay.innerHTML = `You are typing... <br>${e.target.value}`
    }
}

function randomlySelectNumber() {
    return Math.ceil(Math.random() * 9);
}

function numberGuessing(e) {
    let numResult;

    if (e.keyCode === 13) {
        numResult = randomlySelectNumber()
        if (numResult == e.target.value) {
            userNumberDisplay.innerText = "You guessed correctly!";
        } else {
            userNumberDisplay.innerText = "You guessed incorrectly.";
        }
    } else if (e.keyCode === 8) {
        userNumberDisplay.innerText = 'Can you guess my number?';
    }
}

function animalSelection(e) {
    switch(e.target.value) {
        case 'yes': {
            userRadioDisplay.innerText = "Me too! Pets are awesome."
            break;
        }
        case 'no': {
            userRadioDisplay.innerText = "You should get one. Pets are great."
            break;
        }
    }
}

function characterDescription(e) {
    if (e.target.checked) {
        userChecksDisplay.innerHTML += `<li>${e.target.value}</li>`
    }
}

function loadEventListeners() {
    userTextBox.addEventListener('keyup', displayUserText);
    userNumber.addEventListener('keydown', numberGuessing);

    for (let i = 0; i < userRadios.length; i++) {
        userRadios[i].addEventListener('click', animalSelection);
    }

    for (let i = 0; i < userChecks.length; i++) {
        userChecks[i].addEventListener('click', characterDescription)
    }
}

loadEventListeners();