// This is the method that I came up with to convert a Roman Numeral to a decimal value. It uses a for loop and if statements so I don't believe that it is the most optimal method.
// Next try I am going to try and make it using a while loop and switch cases.
function romanToIntegerV1(s) {
    const symbolValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let total = 0;
     
    for (let i = 0; i < s.length; i++) {
        if ((i + 1) < s.length) {
            if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
                total += (symbolValues[s[i + 1]] - symbolValues[s[i]]);
                i++;
            } else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
                total += (symbolValues[s[i + 1]] - symbolValues[s[i]]);
                i++;
            } else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
                total += (symbolValues[s[i + 1]] - symbolValues[s[i]]);
                i++;
            } else {
                total += symbolValues[s[i]];    
            }
        } else {
            total += symbolValues[s[i]]
        }
    }

    return total
};

// This is my second attempt and it is better optimized. It uses a while loop and a switch/case statement and it reported that it beat out 90% of other submissions.
function romanToIntegerV2(s) {
    const symbolValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let total = 0; 
    let currentNum = 0;

    while (currentNum < s.length) {
        let nextNum = currentNum + 1;
        if (nextNum < s.length) {
            let romanNumeral = s[currentNum] + s[nextNum];

            switch(romanNumeral) {
                case "IV":
                case "IX":
                case "XL":
                case "XC":
                case "CD":
                case "CM": {
                    total += (symbolValues[s[nextNum]] - symbolValues[s[currentNum]])
                    currentNum += 2
                    break;
                }; 
                default: {
                    total += symbolValues[s[currentNum]];
                    currentNum++
                    break;
                };
            }
        } else {
            total += symbolValues[s[currentNum]];
            currentNum++
        }
    }

    return total
};

// This one was surprising, I found a way to remove the need for checking if two numbers matched a specific pair, but in doing this method, the run time increased, but memory greatly decreased.
function romanToIntegerV3(s) {
    const symbolValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let total = 0; 
    let currentNum = 0;

    while (currentNum < s.length) {
        let nextNum = currentNum + 1 < s.length ?  currentNum + 1 : currentNum;
        if (symbolValues[s[currentNum]] >= symbolValues[s[nextNum]]) {
            total += symbolValues[s[currentNum]];
        } else {
            total += (symbolValues[s[nextNum]] - symbolValues[s[currentNum]])
            currentNum++;
        }
        currentNum++

    }

    return total;
};

// Biggest Takeaway, using the object helped with decreasing the amount of switch cases necessary. Also, while there may be different ways to accomplish a problem, I found that it
// could have drawbacks or issues of its own. While the switch case did require more memory to run, it decreased the total run time. One the other hand, using a comparing if statement
// decreased the run time but required more time to run. As of now, I remember hearing that the quicker something runs the more memory it takes so I need to take these findings with
// a grain of salt since it could simply be that the method without using a switch statement just happens to be slower, and I especially think this since the method still uses an if
// statement.

const romanNumeralDisplay = document.getElementById('initial-display');
const resultDisplay = document.getElementById('result-display');
const romanNumeralInput = document.getElementById('roman-numeral-input');
const showResultButton = document.getElementById('show-result');

function limitInput(e) {
    let key = e.target;
    let badKeys = /[^ivxlcdm]+/gi

    key.value = key.value.replace(badKeys, '');
}

function loadEventListeners() {
    romanNumeralInput.addEventListener('keyup', limitInput);
    romanNumeralInput.addEventListener('change', () => {
        romanNumeralDisplay.innerHTML = romanNumeralInput.value.toUpperCase();
        resultDisplay.innerHTML = ``;
    })
    showResultButton.addEventListener('click', () => {
        let result = romanToIntegerV2(romanNumeralDisplay.innerHTML)
        resultDisplay.innerHTML = result;
    })
}

loadEventListeners();