const twoDimensionalArray = [0,1,2,[3,4,5],[6,7,8,9,10],11,[12,13,14,15],[16,17,18,19,20]];

// Take in an array, in this array the element can be either a number or another array,
// if it is a number print it to the console, if it is an array iterate through and print all numbers to the console.

function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Checks if the element is an array.
        if (Array.isArray(arr[i])) {
            // If the element is an array, calls a for loop to iterate through the array.
            for (let j = 0; j < arr[i].length; j++) {
                console.log(arr[i][j])
            }
        } else {
            // Logs the number to the console.
            console.log(arr[i]);
        }
    }
}

// flattenArray(twoDimensionalArray);


// Create a function called lettersContained that takes in a single argument of a string and returns a string with the unique characters from that string with no duplicates.
const uniqueStringOne = 'someRandomString';
const uniqueStringTwo = 'blueberry';

// Take a string and iterate character by character, and tally each occurrence of a letter and return the total tallies and characters in the word.

function lettersContained(str) {
    let dictionary = {};

    for (let i = 0; i < str.length; i++) {
        if (dictionary[str[i]]) {
            // If the letter is already in the dictionary, increment its value by one.
            dictionary[str[i]] += 1;
        } else {
            // If the letter is not already there, add it to the object as a property.
            dictionary[str[i]] = 1;
        }
    }

    return dictionary;
}

// console.log(lettersContained(uniqueStringOne));
// console.log(lettersContained(uniqueStringTwo));

// // Question #3
// Create a function called countWords that takes in a single argument of a string and returns the number of words.

// Take in a string, split the string at each space and return the number of words in the sentence.

const sentenceToCheck = 'This is a sentence.';

function countWords(str) {
    let regexPattern = /\S+/g;
    let array = str.match(regexPattern);

    console.log(array);
    return array.length;
    // return str.split(' ').length
}

console.log(countWords(sentenceToCheck))