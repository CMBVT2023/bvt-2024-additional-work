// Bubble sort is traversing through the array and at each point, we will check if the current number and the number next to it are in the right order, if the
// current number is smaller or equal to the next number, if they are we move on, else we swap the two numbers. Once we reach the end we will then go through a final iteration
// only if we swapped any elements in the array. Elements are swapped in place as opposed to making a new array.

// If you can find the largest value and move it to the end, then you no longer need to move said biggest number or check it at the end of the array
function bubbleSort(arr) {
    // // Oops I coded for selection sort XD
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let l = i + 1; l < arr.length; l++) {
    //         if (arr[i] > arr[l]) {
    //             [arr[i], arr[l]] = [arr[l], arr[i]]
    //             let temp = arr[i];
    //             arr[i] = arr[l];
    //             arr[l] = temp;
    //         }
    //     }
    // }

    // Bubble sort method, most effective since it will stop sorting once the array is already sorted, as opposed to going through the whole array.
    let notSorted = true;
    while (notSorted === true) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {
                    // let temp = arr[j];
                    // arr[j] = arr[j+1];
                    // arr[j+1] = temp;
                    // I forgot the semicolon originally and it caused the program to crash and get stuck in an infinite loop.
                    // // DO NOT FORGET THE ENDING SEMICOLON.
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                } else {
                    notSorted = false
                }
            }
        }
    }

    return arr
}

const numberArrayDisplay = document.getElementById('array-display');
const resultDisplay = document.getElementById('result-display');
const numberInput = document.getElementById('number-input');
const showResultButton = document.getElementById('show-result');

let numbers = [];

function populateArray(num) {
    numbers = [];

    for (let i = 0; i < num; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }

    numberArrayDisplay.innerHTML = JSON.stringify(numbers);
};

function loadEventListeners() {
    numberInput.addEventListener('change', (e) => {
        populateArray(e.target.value > 0 ? +e.target.value : 0);
    });
    showResultButton.addEventListener('click', () => {
        let result = bubbleSort(numbers);
        resultDisplay.innerHTML = JSON.stringify(result);
    });
};

loadEventListeners()