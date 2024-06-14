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