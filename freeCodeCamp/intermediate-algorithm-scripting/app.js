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

const sumAllPrimesDisplay = document.getElementById('sum-all-primes-display');
const sumAllPrimesInput = document.getElementById('sum-all-primes-input');

const smallestCommonMultipleDisplay = document.getElementById('smallest-common-multiple-display');
const smallestCommonMultipleButton = document.getElementById('smallest-common-multiple-button');
const smallestCommonMultipleInputOne = document.getElementById('smallest-common-multiple-input-one');
const smallestCommonMultipleInputTwo = document.getElementById('smallest-common-multiple-input-two');

const argumentsOptionalDisplay = document.getElementById('arguments-optional-display');
const argumentsOptionalButton = document.getElementById('arguments-optional-button');
const argumentsOptionalInputOne = document.getElementById('arguments-optional-input-one');
const argumentsOptionalInputTwo = document.getElementById('arguments-optional-input-two');

const dropItInitialDisplay = document.getElementById('drop-it-initial-display');
const dropItFunctionDisplay = document.getElementById('drop-it-function-display');
const dropItFinalDisplay = document.getElementById('drop-it-final-display');
const dropItOptionOne = document.getElementById('drop-it-option-1');
const dropItOptionTwo = document.getElementById('drop-it-option-2');
const dropItOptionThree = document.getElementById('drop-it-option-3');

const spinalTapCaseInitialDisplay = document.getElementById('spinal-tap-case-initial-display');
const spinalTapCaseFinalDisplay = document.getElementById('spinal-tap-case-final-display');
const spinalTapCaseInput = document.getElementById('spinal-tap-case-input');

const pigLatinInitialDisplay = document.getElementById('pig-latin-initial-display');
const pigLatinFinalDisplay = document.getElementById('pig-latin-final-display');
const pigLatinInput = document.getElementById('pig-latin-input');

const missingLettersInitialDisplay = document.getElementById('missing-letters-initial-display');
const missingLettersFinalDisplay = document.getElementById('missing-letters-final-display');
const missingLettersOptionOne = document.getElementById('missing-letters-option-1')
const missingLettersOptionTwo = document.getElementById('missing-letters-option-2')
const missingLettersOptionThree = document.getElementById('missing-letters-option-3')
const missingLettersOptionFour = document.getElementById('missing-letters-option-4')


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

// For this one, I needed to look up a formula for finding if a number is a prime number.
function sumAllPrimes(num) {
  let tempArr = [];
  let total = 0;
  let currentNum = num;

  while (currentNum > 0) {
    let lowestDivisor = Math.floor(Math.sqrt(currentNum));
    let isPrime = true;
    for (let i = 2; i <= lowestDivisor; i++) {
      if (currentNum % i == 0) {
        isPrime = false;
      }
    }
    if (isPrime && currentNum !== 1) {
      tempArr.push(currentNum);
    }

    currentNum--;
  }



  for (const value of tempArr) {
    // Had to specify that value was a number when being added to the total, otherwise, it was being treated as a string within the tempArr
    total += +value;
  }
  sumAllPrimesDisplay.innerHTML = total;
}

// I also had trouble with this one, while I was pretty much at the solution already, I had no idea of how to check if all items in between the two values would work with the current
// number, or continue on to the next until the smallest common multiple was found. I found the way to do so by looking at the hint and by taking a tally via += 1 to a variable
// and comparing that to the total numbers between the first and last values it provided a way to tell if all variables met the requirements, in this case if they were evenly
// divisible by the current number. 
// // Key take away: Even though I figured out the methodology behind the problem, I got stuck at how to flag when certain parameters were met so I need to try and think
// // about what I am trying to check for. Otherwise, I got a majority of the code on my own, and this was the only part I got stuck on.
function smallestCommonMultiple(arr) {
    if (arr[0] === 0 || arr[1] === 0) {
        confirm('Enter Two Numbers Other Than 0.')
        return;
    }
    
    let first;
    let last;
    if (arr[0] > arr[1]) {
      first = arr[1];
      last = arr[0];
    } else {
      first = arr[0];
      last = arr[1];
    }

    let middleValues = [];
    for (let i = first; i <= last; i++) {
      middleValues.push(i);
    }

    let smallestFound = false;
    let multiplier = 1;
    let currentNum;
    while (smallestFound === false) {
      currentNum = first * multiplier;
      let divisorCount = 0;

      for (const value in middleValues) {
        if (currentNum % middleValues[value] == 0) {
          divisorCount += 1;
        }
      }

      if (divisorCount === middleValues.length) {
        smallestFound = true;
      }
      multiplier++;
    }

    smallestCommonMultipleDisplay.innerHTML = currentNum;
}

function argumentsOptional(...args) {
    // // This was my original method, it works and is passable but I wanted to find a more efficient way of doing so.
    // if (args.length === 2) {
    //     if (typeof args[0] === 'number' && typeof args[1] === 'number') {
    //       return args[0] + args[1];
    //     }
    //   }
    
    //   if (typeof args[0] === 'number' && args.length === 1) {
    //     function sumTogether(value) {
    //       if (typeof value === 'number') {
    //         return +args[0] + value;
    //       } else {
    //         return undefined
    //       }
    //     }
    
    //     return sumTogether;
    //   }
      
    
    //   return undefined;

    const [one, two] = [...args]

    function addTwo(value) {
        let result;
        typeof value === 'number' ? result = value + one : result = undefined
        return result
    }

    if (typeof one === 'number') {
        if (args.length === 1) {return addTwo}
        if (args.length === 2) {return addTwo(two)};
    }
}

function dropIt(arr, func) {
    dropItInitialDisplay.innerHTML = JSON.stringify(arr);
    dropItFunctionDisplay.innerHTML = func;

    // // This is the method that I came up with to solve this problem, it uses the findIndex() method and returns the first occurrence,
    // // but I wanted to try and use the shift method to learn how to do it that way also.
    // let index = arr.findIndex((element) => {
    //     if (func(element)) {
    //         return element;
    //     }
    // })

    // if (index !== -1) {
    //     dropItFinalDisplay.innerHTML = JSON.stringify(arr.splice(index, arr.length - index))
    // } else {
    //     dropItFinalDisplay.innerHTML = `none`;
    // }

    // This method is far more efficient, it will only go until the function's conditions are met in which it will stop removing items from the array,
    // also rather than splicing the array this method alters the original array and simply passes it back.
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift()
      }
      dropItFinalDisplay.innerHTML = JSON.stringify(arr);
}

function spinalTapCase(str) {
    // // This is my initial solution to the problem, it does use regex but also utilizes a for loop to cycle through and remove any empty string in the array.
    // // This solution is messy and unnecessary so I defiantly wanted to go back and find a better solution.
    spinalTapCaseInitialDisplay.innerText = str;
    
    // str = str.replace(/\B[A-Z]/g, ' $&')
    // let pattern = /[\W_]/g;
    // str = str.split(pattern);
  
    // let finalArr = [];
    // for (const item of str) {
    //   if (item !== '') {
    //     finalArr.push(item);
    //   }
    // }
    
    // spinalTapCaseFinalDisplay.innerText = finalArr.join('-').toLowerCase();

    // This is the better solution that I found, I did use the get help for some guidance and it showed me that the .split() method can be used with regex patterns.
    
    // Uses .replace() to replace any instance where a lowercase character is followed by a uppercase, and it simply inserts a space between the two.
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Initializes the regexPattern variable that looks for all spaces or "_".
    let regexPattern = /[ _]/g;

    // Uses .split() method with the regexPattern to split the string at all spaces or "_" and then joins the words with a "-" and then converts any uppercase character to lowercase.
    spinalTapCaseFinalDisplay.innerText = str.split(regexPattern).join('-').toLowerCase()
}

function pigLatin(str) {
    pigLatinInitialDisplay.innerText = str;

    // // This was the solution I came up with and I figured there has to be a better way, but after looking at help, most of what I did works.
    // // The only thing I would change would be to optimize it so that it only checks the start of the string to avoid me having to check if a word starts with a vowel.
    // let vowels = /[aeiou]/;
    // 
    // if (vowels.test(str) && vowels.test(str[0]) !== true) {
    //   str = str.replace(/([^aeiou]+)(.+)/, "$2$1ay");
    // } else if (vowels.test(str) && vowels.test(str[0])) {
    //   str = `${str}way`;
    // } else {
    //   str = `${str}ay`;
    // }

    // // This is the solution I found on get help.
    
    // Sets up a regex pattern that checks for all non vowel characters only at the front of the string.
    let consonantRegex = /^[^aeiou]+/;
    // Saves the found regex pattern into a variable.
    let myConsonants = str.match(consonantRegex);
    // Checks if the myConsonants is null or has a value
    //   If the variable has a value, the matching pattern is removed form the string and concatenated to the end of the left over word followed by the characters "ay"    
    //   If the variable is null, then the word starts with a vowel and it just concatenates "way" to the end of the string.
    myConsonants !== null ? str = str.replace(consonantRegex, "").concat(myConsonants).concat("ay") : str = str.concat("way");
    
          

    pigLatinFinalDisplay.innerText = str;
}

function searchAndReplace(str, before, after) {

}

function missingLetters(str) {
    missingLettersInitialDisplay.innerText = str;

    let allLetters = "abcdefghijklmnopqrstuvwxyz";

    let first = allLetters.indexOf(str[0]);
    let last = allLetters.indexOf(str[str.length - 1]);

    let char;
    for (let i = 0; i < str.length; i++) {
      str[i] === allLetters[first + i] ? '' : char = allLetters[first + i];
      if (char !== undefined) {
        missingLettersFinalDisplay.innerText = char;
        return;
      }
    }

    missingLettersFinalDisplay.innerText = 'No Missing Letters';
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

    sumAllPrimesInput.addEventListener('change', (e) => {
        sumAllPrimes(e.target.value)
    })

    smallestCommonMultipleButton.addEventListener('click', () => {
        smallestCommonMultiple([+smallestCommonMultipleInputOne.value, +smallestCommonMultipleInputTwo.value])
    })

    argumentsOptionalButton.addEventListener('click', () => {
        argumentsOptionalDisplay.innerHTML = argumentsOptional(+argumentsOptionalInputOne.value, +argumentsOptionalInputTwo.value);
    })

    dropItOptionOne.addEventListener('change', () => {
        dropIt([1, 2, 3, 4], function(n) {return n >= 3;})
    })
    dropItOptionTwo.addEventListener('change', () => {
        dropIt([0, 1, 0, 1], function(n) {return n === 1;})
    })
    dropItOptionThree.addEventListener('change', () => {
        dropIt([1, 2, 3, 7, 4], function(n) {return n > 3;})
    })

    spinalTapCaseInput.addEventListener('change', (e) => {
        spinalTapCase(e.target.value);
    })

    pigLatinInput.addEventListener('change', (e) => {
        pigLatin(e.target.value);
    })

    missingLettersOptionOne.addEventListener('change', () => {
        missingLetters('abcefg');
    })
    missingLettersOptionTwo.addEventListener('change', () => {
        missingLetters('hiklmnop');
    })
    missingLettersOptionThree.addEventListener('change', () => {
        missingLetters('qrstvwx');
    })
    missingLettersOptionFour.addEventListener('change', () => {
        missingLetters('abcdefg');
    })
}

loadEventHandlers();