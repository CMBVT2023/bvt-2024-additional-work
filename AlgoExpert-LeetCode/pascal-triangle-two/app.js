// This was my initial method to solve the problem, speed wise it was pretty decent, but memory wise, it falls flats. It uses a lot of memory in comparison to the other submissions so I am going to try
// and focus on improving that. In terms of issues, the biggest I had was not thinking 
function pascalTriangleTwoV1(rowIndex) {
    let finalArr = []

// rowNumber is based on the 0-index, since I am using part of the logic from the previous pascal's triangle in which I stored the rows in an array,
// I also used the 0-index to solve the problem.
    function recursiveCall(currentRow, previousRow, currentPosition, currentRowNumber, rowNumber) {
        // Base case, once the row number is equal to the number of elements in the currentRow array;
        if (currentRow.length - 1 === rowNumber && currentRowNumber === rowNumber) {
            finalArr = currentRow;
            return;
        } else if (currentRow.length - 1 === rowNumber) {
            // I forgot to consider that the function would still continue on even after it calls with a new row, meaning that I still needed to add a return statement on this branch too, even though I am still recursively calling the function with a new row.
            recursiveCall([], currentRow, 0, currentRowNumber + 1, rowNumber)
            return;
        }

        if (currentPosition === 0 || currentPosition === currentRowNumber) {
            currentRow.push(1);
        } else {
            currentRow.push(previousRow[currentPosition] + previousRow[currentPosition - 1])
        }
        

        recursiveCall(currentRow, previousRow, currentPosition + 1, currentRowNumber, rowNumber);
    }

    if (rowIndex === 0) {
        finalArr.push([1])
    } else {
        recursiveCall([], [1], 0, 1, rowIndex);
    }

    return finalArr;
};

// This method fixes some of the mistakes I made with the first iteration, I based the currentRow entirely on the final value for the rowNumber instead of the currentRow, meaning that instead of basing
// the length of the currentArray on the value for the currentRow, I based it on the value for the target row. This did free up some memory but it did make things run a little bit slower though.
function pascalTriangleTwoV2(rowIndex) {
    let finalArr = []

    function recursiveCall(currentRow, previousRow, currentPosition, currentRowNumber, rowNumber) {
        if (currentRow.length - 1 === currentRowNumber && currentRowNumber === rowNumber) {
            finalArr = currentRow;
            return;
        } else if (currentRow.length - 1 === currentRowNumber) {
            previousRow.splice(0, previousRow.length);
            recursiveCall(previousRow, currentRow, 0, currentRowNumber + 1, rowNumber)
            return;
        }

        if (currentPosition === 0 || currentPosition === currentRowNumber) {
            currentRow.push(1);
        } else {
            currentRow.push(previousRow[currentPosition] + previousRow[currentPosition - 1])
        }
        

        recursiveCall(currentRow, previousRow, currentPosition + 1, currentRowNumber, rowNumber);
    }


    if (rowIndex === 0) {
        finalArr = [1]
    } else {
        recursiveCall([], [1], 0, 1, rowIndex);
    }

    return finalArr;
};


// This method is not any better than the previous but it handles the recursive call in a different way, rather than having the call be nested multiple times, it instead uses the previous solution
// to the first pascal triangle and instead of appending the result of the new row to an array, it overwrites the finalArr until it reaches the desired row, while this does use the most memory,
// it also is considerably slower than the previous methods.
function pascalTriangleTwoV3(rowIndex) {
    let finalArr = []

    function recursiveCall(currentRow, previousRow, currentPosition, currentRowNumber, rowNumber) {
        if (currentRow.length - 1 === currentRowNumber) {
            finalArr = currentRow;
            return;
        }

        if (currentPosition === 0 || currentPosition === currentRowNumber) {
            currentRow.push(1);
        } else {
            currentRow.push(previousRow[currentPosition] + previousRow[currentPosition - 1])
        }
        

        recursiveCall(currentRow, previousRow, currentPosition + 1, currentRowNumber, rowNumber);
    }


    if (rowIndex >= 0) {
        finalArr = [1];
        let currentRow = 1;

        while (finalArr.length - 1 < rowIndex) {
            recursiveCall([], finalArr, 0, currentRow, rowIndex);
            currentRow += 1;
        }
        return finalArr;
    } 
};

// This is by far the best method since it is in the middle on both speed and memory usage. I got hung up on relying on recursion and stopped thinking about how for loops and while loops might be better
// in this case. This method does use a for loop with a nested while loop in it but its memory and speed makes it the best method so far optimization wise. 
function pascalTriangleTwoV4(rowIndex) {
    let finalArr = []

    for (let i = 0; i <= rowIndex; i++) {
        let currentRow = [];
        while (currentRow.length - 1 < i) {
            if (currentRow.length === 0 || currentRow.length === i) {
                currentRow.push(1)
            } else {
                currentRow.push(finalArr[i-1][currentRow.length] + finalArr[i-1][currentRow.length - 1])
            }
        }

        finalArr.push(currentRow)
    }

    return finalArr[rowIndex];
};

// I was able to find a way to utilize only one while loop. This method so far is the most optimized in terms of speed and memory as it is not only the fastest but also uses the least amount of 
// memory. By reducing the need to recursively call a function or nest loops I was able to improve the speed and rather than storing all of the data for the triangle, I simply rewrite over the previous
// and finalArr with the new currentRow and new previousRow without needing to store any unneeded rows.
function pascalTriangleTwoV5(rowIndex) {
    let finalArr = []
    let previousRow = [1];
    let currentRow = 1;

    while (finalArr.length - 1 < currentRow) {
        if (finalArr.length === 0 || finalArr.length === currentRow) {
            finalArr.push(1)
        } else {
            finalArr.push(previousRow[finalArr.length] + previousRow[finalArr.length - 1])
        }

        if (finalArr.length -1 === rowIndex) {
            return finalArr
        } else if (finalArr.length -1 === currentRow) {
            currentRow += 1
            previousRow = finalArr.splice(0, finalArr.length)
        }
    }
};

// Biggest takeaway, by far, it has to be that I need to think a bit more clearly when copying parts of code from my previous projects or creations. At first, I thought since this used 0-indexing I
// needed to change the way the rowNumber is calculated since my previous pascal triangle wasn't 0-index, but thinking back to it now it was, even though it wasn't specifically stated. Using an array,
// instantly means that the problem is 0-index based and that is something I didn't consider and it caused me to get confused and to waste a ton of time fixing and changing things unnecessarily.
// Also, I found that sometimes simply because another solution worked using a certain technique or solution it do not strictly translate to other problems. In this case, recursion used too much memory
// and this whole problem was based on reducing the amount of memory needed while also increasing the speed of the method, so using a while or for loop in this cases presented a faster and less memory
// intensive solution.