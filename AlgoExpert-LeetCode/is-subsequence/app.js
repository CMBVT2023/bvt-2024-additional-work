// This is the first method I came up with to solve the problem. It uses two pointers, one points at the s string and the other at the t string.
// While the pointer on the t string is less than the string's length, it will run a while loop, an if statement is used to check if the character from the t string at the pointerTwo position
// is equal to the character from the s string at pointerOne position, and if it is both pointers are incremented. Else, if the values are not the same, only pointerOne is incremented.
// Another if statement is used to check if the s string has been fully found, which is signified by the pointer value equaling the s string's length, and if this is so, the match variable
// is set to true and pointerTwo is set equal to the length of the t string to stop the while loop.
function isSubsequence(s, t) {
    // Initializes two pointer variables.
    let pointerOne = 0;
    let pointerTwo = 0;

    // Initializes a match boolean to false by default
    let match = false;

    // Checks that s and t are not empty strings
    // if they are, return true since technically the value of s and t match.
    if (s.length == 0 && t.length == 0) {
        return true;
    }

    // Creates a while condition that will continue to execute until the value of pointerTwo is equal or greater than t.length
    while (pointerTwo < t.length) {
        // Checks if the value at the current position of each pointer are equal
        if (t[pointerTwo] == s[pointerOne]) {
            // If so, increments both pointers signifying that the character from the s string found a match.
            pointerOne++;
            pointerTwo++
        } else {
            // If not, increments only pointerTwo signifying that no match was found for the character at s string.
            pointerTwo++;
        }

        // Checks if the entirety of the s string was found within the t string via checking the value of pointerOne,
        // if pointerOne is equal to s.length, then the entirety of s string was found within t.
        if (pointerOne === s.length) {
            // Sets match to true
            match = true;
            // Sets pointerTwo to the value of t.length to exit the while loop.
            pointerTwo = t.length
        }
    }

    // Returns the value of match, either true if the final if statement was triggered or false if it was not.
    return match;
};