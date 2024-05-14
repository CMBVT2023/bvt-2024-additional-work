const courseGrades = document.getElementById('gradebook').querySelectorAll('input');
const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('clear');
const averageDisplay = document.getElementById('average');
const gradeDisplay = document.getElementById('grade');

function displayAverage(value) {
    averageDisplay.innerText = `Average Score: ${value}`;
}

function displayGrade(value) {
    let result = ``;
    if (value <= 59) {
        result = 'F';
    } else if (value <= 69) {
        result = 'D';
    } else if (value <= 79) {
        result = 'C';
    } else if (value <= 89) {
        result = 'B';
    } else if (value <= 99) {
        result = 'A';
    } else if (value === 100) {
        result = 'A+';
    }

    gradeDisplay.innerText = `Student Grade: ${result}`;
}

function scoreAverage() {
    let totalScore = 0;

    for (let i = 0; i < courseGrades.length; i++) {
        totalScore += courseGrades[i].valueAsNumber;
    }

    displayAverage(totalScore / 5);
    displayGrade(totalScore / 5);
}

function clearInputs() {
    for (let i = 0; i < courseGrades.length; i++) {
        courseGrades[i].value = ``;
    };

    averageDisplay.innerText = `Average Score:`;
    gradeDisplay.innerText = `Student Grade:`;
}

function loadEventListeners() {
    calculateBtn.addEventListener('click', scoreAverage);
    clearBtn.addEventListener('click', clearInputs);
}

loadEventListeners()