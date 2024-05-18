const totalSumDisplay = document.getElementById('total-sum');
const numberOneInput = document.getElementById('num-one');
const numberTwoInput = document.getElementById('num-two');
const submitNumberButton = document.getElementById('submit-num');

const personFirstNameDisplay = document.getElementById('person-first-name-display');
const personLastNameDisplay = document.getElementById('person-last-name-display');
const personFirstNameInput = document.getElementById('person-first');
const personLastNameInput = document.getElementById('person-last');
const personFirstNameButton = document.getElementById('person-set-first');
const personLastNameButton = document.getElementById('person-set-last');
const personFullNameButton = document.getElementById('person-set-full');

const differenceDisplay = document.getElementById('diff-two-arr-display');
const arrayOptionOne = document.getElementById('option-1');
const arrayOptionTwo = document.getElementById('option-2');

function sumNumbersInARange(arr) {
    let first;
    let last;
    let total = 0;

    if (arr[0] <= arr[arr.length - 1]) {
        first = arr[0];
        last = arr[arr.length - 1];
    } else {
        first = arr[arr.length - 1];
        last = arr[0];
    }

    for (let i = first; i <= last; i++) {
        total += i;
    }

    totalSumDisplay.innerHTML = total;
}

const Person = function(first, last) {
    let firstName = first;
    let lastName = last;
  
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFullName = function() {
      return `${firstName} ${lastName}`;
    };
    this.setFirstName = function(first) {
      firstName = first;
    };
    this.setLastName = function(last) {
      lastName = last;
    };
    this.setFullName = function(first, last) {
      firstName = first;
      lastName = last;
    };
};

const myPerson = new Person()

function makeAPerson(value) {
    switch (value) {
        case 1: {
            myPerson.setFirstName(personFirstNameInput.value);
            personFirstNameDisplay.innerHTML = myPerson.getFirstName();

            personLastNameDisplay.innerHTML = ``;
            break;
        };
        case 2: {
            myPerson.setLastName(personLastNameInput.value);
            personLastNameDisplay.innerHTML = myPerson.getLastName();

            personFirstNameDisplay.innerHTML = ``;
            break;
        };
        case 3: {
            myPerson.setFirstName(personFirstNameInput.value);
            personFirstNameDisplay.innerHTML = myPerson.getFirstName();

            myPerson.setLastName(personLastNameInput.value);
            personLastNameDisplay.innerHTML = myPerson.getLastName();
            break;
        };
    }
}

function diffArray(arr1, arr2) {
    const newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
        newArr.push(arr2[i]);
        }
    }

    differenceDisplay.innerHTML = ``
    for (const value of newArr) {
        differenceDisplay.innerHTML += `${value}`;
    }
}

function loadEventHandlers() {
    submitNumberButton.addEventListener('click', () => {
        // Takes the values entered in the two inputs and quickly converts them to number equivalents.
        let newArr = [+numberOneInput.value, +numberTwoInput.value];
        sumNumbersInARange(newArr);
    });

    personFirstNameButton.addEventListener('click', () => {makeAPerson(1)});
    personLastNameButton.addEventListener('click', () => {makeAPerson(2)});
    personFullNameButton.addEventListener('click', () => {makeAPerson(3)});

    arrayOptionOne.addEventListener('click', () => {
        diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    })
    arrayOptionTwo.addEventListener('click', () => {
        diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    })
}

loadEventHandlers();