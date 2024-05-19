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
const arrayOptionOne = document.getElementById('diff-two-arr-option-1');
const arrayOptionTwo = document.getElementById('diff-two-arr-option-2');

const seekAndDestroyDisplay = document.getElementById('seek-and-destroy-display');
const sADOptionOne = document.getElementById('seek-and-destroy-option-1');
const sADOptionTwo = document.getElementById('seek-and-destroy-option-2');
const sADOptionThree = document.getElementById('seek-and-destroy-option-3');

const whereforeArtThouDisplay = document.getElementById('wherefore-art-thou-display');
const whereforeArtThouOptionOne = document.getElementById('wherefore-art-thou-option-1');
const whereforeArtThouOptionTwo = document.getElementById('wherefore-art-thou-option-2');
const whereforeArtThouOptionThree = document.getElementById('wherefore-art-thou-option-3');

const dnaPairingDisplay = document.getElementById('dna-pairing-display');
const dnaPairingButton = document.getElementById('dna-pairing-button');

const sortedUnionInitialDisplay = document.getElementById('sorted-union-initial-display');
const sortedUnionFinalDisplay = document.getElementById('sorted-union-final-display');
const sortedUnionOptionOne = document.getElementById('sorted-union-option-1');
const sortedUnionOptionTwo = document.getElementById('sorted-union-option-2');
const sortedUnionOptionThree = document.getElementById('sorted-union-option-3');

const sumAllOddFibonacciNumbersDisplay = document.getElementById('sum-all-odd-fibonacci-numbers-display');
const sumAllOddFibonacciNumbersInput = document.getElementById('sum-all-odd-fibonacci-numbers-input');

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

function seekAndDestroy(array, ...arr) {

    for (const number of arr) {
        while (array.indexOf(number) !== -1) {
            array.splice(array.indexOf(number), 1)
        }
    }
    
    seekAndDestroyDisplay.innerHTML = array.join(' ');
}

function whereforeArtThou(collection, source) {
    let finalArr = []

    for (const item of collection) {
        let valid = true;
        for (const sourceKey in source) {
            if (item[sourceKey] !== source[sourceKey]) {
                valid = false;
            }
        }

        valid === true ? finalArr.push(item) : '';
    }

    whereforeArtThouDisplay.innerHTML = JSON.stringify(finalArr);
}

function dnaPairing(str) {
    // // This is the method that I originally used to solve the problem, while it does work and is acceptable, I did find a way through the help feature afterwards to accomplish
    // // this using .map() and object key:pairs which I found to be simpler and more useful to know how to implement.
    
    // let newArr = str.split('');
    // let finalArr = [];

    // for (const item of newArr) {
    //     switch (item) {
    //     case 'G': {
    //         finalArr.push([item, 'C'])
    //         break;
    //     }
    //     case 'C': {
    //         finalArr.push([item, 'G'])
    //         break;
    //     }
    //     case 'A': {
    //         finalArr.push([item, 'T'])
    //         break;
    //     }
    //     case 'T': {
    //         finalArr.push([item, 'A'])
    //         break;
    //     }
    //     }
    // }

    // Arguably better way to do this,

    const dnaPairs = {
        C: 'G',
        G: 'C',
        A: 'T',
        T: 'A'
    }

    // The .map method creates a new array with every element of the previous array, the benefit is that through using an arrow function, I can add the dnaPair with said element while
    // also making it into an array, thus, without having to iterate through each element and append it to a new array, I can meet both requirements using the .map() feature.
    dnaPairingDisplay.innerHTML = JSON.stringify(str.split('').map((element) => [element, dnaPairs[element]]))
}

function sortedUnion(...arr) {
    sortedUnionInitialDisplay.innerHTML = JSON.stringify(arr);

    let finalArr = [];
    
    for (const currentArr of arr) {
        for (const item of currentArr) {
            if (finalArr.indexOf(item) === -1) {
                finalArr.push(item);
            }
        }
    }

    sortedUnionFinalDisplay.innerHTML = JSON.stringify(finalArr);
}

function sumAllOddFibonacciNumbers(num) {
    let total = 0;
  
    if (num > 1) {
      let first = 0;
      let last = 1;
      let result = 0;
  
      while (last <= num) {
        result = last + first;
        if (last % 2 !== 0) {
          total += last;
        }
        first = last;
        last = result;
      }
  
      sumAllOddFibonacciNumbersDisplay.innerHTML = total;
    } else {
        sumAllOddFibonacciNumbersDisplay.innerHTML = 1;
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

    sADOptionOne.addEventListener('click', () => {
        seekAndDestroy([1, 2, 3, 1, 2, 3, 4, 4, 4, 5, 5, 6, 1, 2, 3, 4, 5, 6, 4, 5, 6], 1)
    });
    sADOptionTwo.addEventListener('click', () => {
        seekAndDestroy([1, 2, 3, 1, 2, 3, 4, 4, 4, 5, 5, 6, 1, 2, 3, 4, 5, 6, 4, 5, 6], 2, 3)
    })
    sADOptionThree.addEventListener('click', () => {
        seekAndDestroy([1, 2, 3, 1, 2, 3, 4, 4, 4, 5, 5, 6, 1, 2, 3, 4, 5, 6, 4, 5, 6], 4, 5, 6)
    })

    whereforeArtThouOptionOne.addEventListener('click', () => {
        whereforeArtThou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }, { first: "Juliet", last: null }], { last: "Capulet" })
    })
    whereforeArtThouOptionTwo.addEventListener('click', () => {
        whereforeArtThou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }, { first: "Juliet", last: null }], { first: "Romeo" })
    })
    whereforeArtThouOptionThree.addEventListener('click', () => {
        whereforeArtThou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }, { first: "Juliet", last: null }], { last: null })
    })

    dnaPairingButton.addEventListener('click', () => {
        dnaPairing('CTCTAGAT')
    })

    sortedUnionOptionOne.addEventListener('click', () => {
        sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1])
    })
    sortedUnionOptionTwo.addEventListener('click', () => {
        sortedUnion([1, 2, 3], [5, 2, 1])
    })
    sortedUnionOptionThree.addEventListener('click', () => {
        sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
    })

    sumAllOddFibonacciNumbersInput.addEventListener('change', (e) => {
        sumAllOddFibonacciNumbers(e.target.value)
    })
}

loadEventHandlers();