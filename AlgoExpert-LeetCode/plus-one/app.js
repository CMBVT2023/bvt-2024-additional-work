// This was the method I used to solve this problem, much like the binary adding one, this one ran into a limitation involving the size of the number object.
// To solve this issue I used BigInt and then converted the value to a string and specifying the decimal radix.
function plusOneV1(digits) {
    let num = (BigInt(digits.join('')) + 1n).toString(10).split('');

    return num;
}

// I retried using the other method I noticed with other submissions. I made it my own by attempting it a few days after seeing it that 
// way I only went in with the idea of how to solve it but without recycling the code others wrote. However, this is a worse method since it
// takes longer and uses more memory but it is another alternative if the BigInt method is not usable. Plus, I did like solving it this way since
// it was based more on mutation of the array directly and not converting the array to a value first.
function plusOneAlpha(digits) {
    let rerun = true;
    let i = digits.length - 1;

    while (rerun && i >= 0) {
        if (parseInt(digits[i]) + 1 > 9) {
            digits[i] = 0;
            rerun = true;
        } else {
            digits[i] = (parseInt(digits[i]) + 1)
            console.log(digits)
            rerun = false;
        }

        if (i - 1 < 0 && rerun) {
            digits.unshift(0);
        } else {
            i--;
        }
    }

    return digits
};

// Biggest takeaway, this was by far the easiest problem of the four I completed for this week; two sum, add binary,
// roman to integer, and this one. I am now realizing how similar some of these problems are and that methods that I
// am learning from completing one are transferable to others. If I ever get stuck or am unsure how to solve something,
// maybe moving on to the next problem will allow me to find a new method or new insight which is likely a better use of time
// then just sitting and looking at the issue like I have been doing.

const numberArrayDisplay = document.getElementById('array-display');
const resultDisplay = document.getElementById('result-display');
const firstNumberInput = document.getElementById('first-number-input');
const lastNumberInput = document.getElementById('last-number-input');
const showResultButton = document.getElementById('show-result');

let numberArray = [];

function populateArray(start, end) {

    numberArray = [];

    for (let i = +start; i <= end; i++) {
        numberArray.push(i);
    }

    return numberArray;
}

function loadEventListeners() {
    firstNumberInput.addEventListener('change', (e) => {
        populateArray(e.target.value, lastNumberInput.value === '' ? 0 : lastNumberInput.value);
        numberArrayDisplay.innerHTML = JSON.stringify(numberArray);
    })
    lastNumberInput.addEventListener('change', (e) => {
        populateArray(firstNumberInput.value === '' ? 0 : firstNumberInput.value, e.target.value);
        numberArrayDisplay.innerHTML = JSON.stringify(numberArray);
    })

    showResultButton.addEventListener('click', () => {
        let result = plusOneV1(numberArray)
        resultDisplay.innerHTML = JSON.stringify(result);
    })
}

loadEventListeners();