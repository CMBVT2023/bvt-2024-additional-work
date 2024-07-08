// // Pseudocode I wrote to solve this problem.
// Take in a number that will represent the number of rows on the pascal's triangle.
// // The current number of the row will be equal to the length of of the row.
// Insert an array with the value of '1'
// If the number of row is greater than 1 than call a method to calculate the values of the next row.
// To do so, Calculate the value of the two number above the current number and append it to the row's array
// Append the row's array to the final array and either call the method again or if the number elements in the final array is
// equal to the number of rows passed in then return the array.

// I am excited to say that I solved this problem on my own using what I learned from the generate parentheses problem. I heavily used backtracking and listed all steps that my recursion would 
// go through and it greatly helped me solve this problem. In addition, by looking for patterns, like realizing that the first and last numbers will always be 1, also helped simplify this solution a
// ton. I think this method is optimal but I do know there are some changes that I can make to have this be more optimized and easier to read.
function pascalTriangleV1(numRows) {
    let finalArr = []
    if (numRows > 0) {
        finalArr.push([1]);
    }

    function recursiveCall(rowArr, currentPosition, rowNumber) {
        // Base Case, rowArr.length is equal to the rowNumber
        if (rowArr.length - 1 === rowNumber) {
            finalArr.push(rowArr)
            return;
        }

        // If the currentPosition is at the start of the row or at the end then the value will always be 1.
        if (currentPosition === 0 || currentPosition === rowNumber) {
            rowArr.push(1);
        } else {
            // The current position's value is equated by taking the currentPosition's value from the previous row and adding it with the (currentPosition - 1)'s value from the previous row. 
            let value = finalArr[rowNumber - 1][currentPosition] + finalArr[rowNumber - 1][currentPosition - 1];
            rowArr.push(value);
        }

        recursiveCall(rowArr, currentPosition + 1, rowNumber)
    }

    for (let i = 1; i < numRows; i++) {
        let currentRow = [];
        recursiveCall(currentRow, 0, i)
    }

    return finalArr;
};

// This is basically just a rewrite of the first way that use slightly less time, but only by a bit, and it is easier to read. I noticed that on another submission someone passed in the previous row
// as a parameter to make it easier to access the row, as opposed to accessing the global arr like I did. Likely, it made no real difference but it made it far easier to understand and read.
function pascalTriangleV2(numRows) {
    let finalArr = [[1]]

    function recursiveCall(rowArr, previousRow, currentPosition, rowNumber) {
        if (rowArr.length - 1 === rowNumber) {
            finalArr.push(rowArr)
            return;
        }

        currentPosition === 0 || currentPosition === rowNumber ? rowArr.push(1) : rowArr.push(previousRow[currentPosition] + previousRow[currentPosition - 1]);

        recursiveCall(rowArr, previousRow, currentPosition + 1, rowNumber)
    }

    for (let i = 1; i < numRows; i++) {
        let currentRow = [];
        recursiveCall(currentRow, finalArr[i - 1], 0, i)
    }

    return finalArr;
};

// This method utilizes nested for loops to create the triangle. I was under the impression that recursion would use less memory but in reality this method is around the same memory and speed.
function pascalTriangleV3(numRows) {
    let pt = []
    if (numRows > 0) {
        pt.push([1]);
    } else {
        return;
    }

    // Loops through the number of rows based on the past in variables, row one is already added so the count begins from 1.
    for (let i = 1; i < numRows; i++) {
        // Initializes a new array with the first value already added
        let currentRow = [1];

        // Loops based on the previous length of the row before
        for (let j = 1; j < pt[i-1].length; j++) {
            // pushes the value of the number before and at the same position on the previous row.
            currentRow.push(pt[i-1][j] + pt[i-1][j -1])
        }
        // Pushes a value of 1 which will always be the last value of a row.
        currentRow.push(1)
        // Pushes the row to the final array before going onto the next or returning the array
        pt.push(currentRow)
    }

    // Returns the triangle
    return pt;
};

// Biggest takeaway, after learning that you can also use for loops instead of only recursion, I once again have to realize that there are multiple ways to solve problems.
// Simply because other problems are similar to the one I am working on does not mean that they need to be solved in the exact same way. The fact that I didn't even attempt to use loops
// to solve this problem shows me that I was too laser focused on making recursion work when I should be focusing on solving the problem in any way I can regardless of the method used.
// I need to be more open minded and willing to give other methods a try, even if I do solve something, then I should try and see if there is a better or more straight forward method. By far,
// these problems are showing me that there are multiple ways to solve an issue but the most important thing to do is to find a way to initially solve it and try and make it better. Never accept or
// use the first method that works, there is almost always a way to improve things, but still make sure that I don't go beyond the point of diminishing return.

// Initializes the html elements from the webpage.
const resultDisplay = document.getElementById('result-display');
const userInput = document.getElementById('number-input');

// Displays the algorithm's result
function displayResult(num) {
    // Initializes a variable to store the result of the algorithm.
    let triangle = pascalTriangleV3(num);

    // Clears the resultDisplay element.
    resultDisplay.innerHTML = ``;
    
    // Iterates through the triangle array and displays each row on a new line in the resultDisplay.
    for (let i = 0; i < triangle.length; i++) {
        resultDisplay.innerHTML += `${triangle[i]} <br>`;
    }

}

// Initializes the default event listeners for the webpage.
function loadEventListeners() {
    // Initializes an eventListener for the userInput element.
    userInput.addEventListener('change', () => {
        displayResult(userInput.value);
    })
}

loadEventListeners();