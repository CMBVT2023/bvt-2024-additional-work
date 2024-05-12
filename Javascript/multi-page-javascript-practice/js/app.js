

// // You can either use deconstruction or the wildcard method to import a single item or everything respectively.
import * as squareModule from "./square.js"
// import { squareNumber as userSquare } from "./square.js";

const squareNum = document.getElementById('squared-number');
const squareBtn = document.getElementById('squared-button');

const squareDisplay = document.getElementById('squared-display');

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

function loadEventListeners() {
    squareBtn.addEventListener('click', displaySquaredNum);
}

loadEventListeners();