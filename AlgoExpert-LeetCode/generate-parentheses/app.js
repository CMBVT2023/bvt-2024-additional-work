// This method was entirely based on a video I found that explained the whole premise behind how to solve the problem with backtracking. This code is not my own nor is the solution and I really 
// don't think there is any way to better optimize it at least to my knowledge at the moment. While I normally do not like looking for the answer, I figured finding an explanation and seeing where
// I was getting stuck at was more useful than staring at the problem for any longer. 
// One big mistake I made was that I mutated the string and then made the recursive call, rather than appending the open or closed parenthesis in the function call I instead set the variable
// equal to itself plus the parenthesis which created a problem. When the first if statement was achieved, this mutating of the currentString directly altered it for the second if statement which
// basically removed some of the potential branches for the final result, and thus, my finalArr was missing some potential possibilities.
function generateParenthesisV1(n) {

    function recursiveCall(finalArr, currentString, open, closed, max) {
        if(currentString.length === 2 * n) {
            finalArr.push(currentString);
            return;
        }

        if (open < max) {
            recursiveCall(finalArr, currentString + '(', open + 1, closed , max);
        };
        
        if (closed < open) {
            recursiveCall(finalArr, currentString + ')', open, closed + 1, max);
        };
    }
    let finalArr = [];
    recursiveCall(finalArr, '', 0, 0, n)
    
    return finalArr;
};

// While I did need external help to solve this problem, I did try to make changes to make it a bit more optimized, emphasis on the "bit" part as this barely changes the outcome if not makes it a bit
// slower since the ternary operator requires an else statement that is unnecessary but still runs anyways. The only other change I made was to check if the value is greater than zero or if it is equal
// to one, in which case it just pushes the value "()" to avoid needing to call the function twice.
function generateParenthesisV2(n) {
    let finalArr = [];

    function recursiveCall(currentString, open, closed, max) {
        if(currentString.length === 2 * n) {
            finalArr.push(currentString);
            return;
        }
        open < max ? recursiveCall(currentString + '(', open + 1, closed , max) : ''
        closed < open ? recursiveCall(currentString + ')', open, closed + 1, max) : ''

    }
    
    if (n === 1) {
        finalArr.push('()')
    } else if (n > 0) {
        recursiveCall('', 0, 0, n)
    } else {
        return [];
    }
    
    return finalArr;
};


// My biggest takeaway from this problem was that just while knowing about some kind of method will always be useful or helpful, there are situations in which even having the knowledge or experience with
// said method does not matter if I do not have any idea of how to approach the actual problem. This problem was probably the hardest one I have attempted to solve, simply because this was the first one
// where I had no idea how to even go about doing so. While I knew initially I needed some kind of recursion or a loop, but I had no idea how to check the number of parenthesis being placed or to ensure that
// the there were as many opens as there were closed and that all placements were valid. I was at a complete lost. Sometimes, while I always dislike doing so, I made the right decision with looking for a 
// tutorial on solving this answer. Otherwise, I would have wasted even longer on just looking at the screen without having any clue on how to move forward. The best choice I could have made was admitting that
// I was at a loss and needed help. By getting external help, I learned more than I would have and found some new insights into recursion.

// Initializes html elements.
const initialDisplay = document.getElementById('initial-display');
const resultDisplay = document.getElementById('result-display');
const userInput = document.getElementById('text-input');

// Loads the default eventListener for the webpage.
function loadEventListener() {
    // Initializes a eventListener on the userInput element.
    userInput.addEventListener('change', (e) => {
        if (userInput.value > 0 && userInput.value < 9) {
            initialDisplay.innerHTML = userInput.value;
            resultDisplay.innerHTML = generateParenthesisV2(userInput.value);
        } else {
            initialDisplay.innerHTML = userInput.value;
            resultDisplay.innerHTML = `Invalid Value`;
        }
    })
}

loadEventListener();