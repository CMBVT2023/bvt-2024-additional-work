// This was my first successful method I found to solve this problem, it seems to fall in the middle on time complexity and memory use so I wanted to try and find a way to optimize it more or
// find a better way to improve it.
function removedDuplicatesV1(nums) {
    let unique = 0;
    let currentNum;

    for (let i = 0; i < nums.length; i++) {
        if (currentNum === nums[i]) {
            nums[i] = '_';
        } else {
            currentNum = nums[i];
            if(nums.indexOf('_') < i && nums.indexOf('_') !== (-1)) {
                [nums[nums.indexOf('_')], nums[i]] = [nums[i], nums[nums.indexOf('_')]];
            }
            unique++;
        }
    }

    return unique;
};

// Initializes all html elements from the webpage.
const initialDisplay = document.getElementById('initial-display');
const resultDisplay = document.getElementById('result-display');
const radioOptions = document.getElementById('radio-options').querySelectorAll('input');

// Displays the result of the algorithm.
function displayResult(num) {
    // Initializes a variable to store an array.
    let numArray = [];
    // Checks the value of the passed in number and the associated array is set to the numArray variable.
    if (num == 0) {
        numArray = [1,1,2];
    } else if (num == 1) {
        numArray = [0,0,1,1,1,2,2,3,3,4];
    } else if (num == 2) {
        numArray = [0,1,2,4,4,4,5,6,7,7,7,7,8,8,8,9,16,16,20,20];
    }

    // Displays the associated array in the initialDisplay element.
    initialDisplay.innerHTML = JSON.stringify(numArray);

    // Displays the result of the algorithm in the resultDisplay element.
    resultDisplay.innerHTML = JSON.stringify(numArray.slice(0, removedDuplicatesV1(numArray)));
}

// Loads all default eventListeners for the webpage.
function loadEventListeners() {
    for (const radio of radioOptions) {
        radio.addEventListener('change', () => {
            displayResult(radio.value);
        })
    }
}

loadEventListeners();