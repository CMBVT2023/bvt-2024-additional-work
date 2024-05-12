

// // You can either use deconstruction or the wildcard method to import a single item or everything respectively.
import * as squareModule from "./square.js";
// import { squareNumber as userSquare } from "./square.js";

import * as personModule from "./person.js";
import * as concatenateModule from "./concatenate.js";

const squareNum = document.getElementById('squared-number');
const squareBtn = document.getElementById('squared-button');
const squareDisplay = document.getElementById('squared-display');

const personName = document.getElementById('person-name');
const personAge = document.getElementById('person-age');
const personBtn = document.getElementById('person-button');
const personDisplay = document.getElementById('person-display');

const wordOne = document.getElementById('concatenate-1');
const wordTwo = document.getElementById('concatenate-2');
const concatenateBtn = document.getElementById('concatenate-button');
const concatenateDisplay = document.getElementById('concatenate-display');

function displaySquaredNum() {
    let userNum = squareNum.value;

    if (userNum == '' || userNum == 0) {
        squareDisplay.innerText = "Enter a valid number to be squared."
    } else {
        // With the wildcard method.
        squareDisplay.innerText = squareModule.squareNumber(userNum)

        // With the deconstruction method.
        // squareDisplay.innerText = userSquare(userNum)
    }
}

function displayPersonObject() {
    let name = personName.value;
    let age = personAge.value;

    let personObj = new personModule.Person(name, age);

    personDisplay.innerText = JSON.stringify(personObj);
    personObj.logName();
}

function displayString() {
    let word1 = wordOne.value;
    let word2 = wordTwo.value;

    let string = new concatenateModule.Concatenate(word1, word2);

    concatenateDisplay.innerText = string.combineString();
}

function loadEventListeners() {
    squareBtn.addEventListener('click', displaySquaredNum);
    personBtn.addEventListener('click', displayPersonObject);
    concatenateBtn.addEventListener('click', displayString);
}

loadEventListeners();