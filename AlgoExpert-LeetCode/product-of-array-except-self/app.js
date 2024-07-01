// This was my first attempt at solving this problem, and it is bad, it has a long run time and is in the bottom 5% in that regard, memory wise, it is decent as it beats around 61% of other submissions,
// but that is by no means good considering its over 2000ms runtime requirement. This method leaves a lot that needs to be improved, for starters, it uses a nested loop which increases time by a large
// amount, it does work and it does help to show what it takes to solve this problem, but I know I can improve this and that I need to switch the method of how I solve this.
function productOfArrayV1(nums) {
 // // // Pseudo Code:   
 // Take in an array of numbers and start iterating through it,
 // for each number, find a way to exclude the current number and instead, take all other numbers and multiply them
 // and append this value a new array.
 // // If there is a zero in any other position, then the answer will always result in a zero being appended.
 // // Also, the final size of the array will be equal to the passed in array

    //  Initializes two variables, one to store the current position of the numbers array and one to store the final results.
    let currentPosition = nums.length - 1;
    let finalArr = [];

    // Loops until the finalArr is equal in size ot the nums array.
    while (finalArr.length !== nums.length) {
        // Takes the number at the beginning of the nums array and temporarily removes it.
        let currentNum = nums.shift();
        // Sets the initial value to the first number of the nums array
        let value = nums[0];
        // Checks if the currently removed num's result has already been calculated, ie if the currentNum is a duplicate.
        if (nums.lastIndexOf(currentNum) !== -1 && nums.lastIndexOf(currentNum) > currentPosition) {
            // If so, grabs the value from the finalArr and pushes it
            finalArr.push(finalArr[nums.lastIndexOf(currentNum) - currentPosition])
        } else {
            // If not, iterates through the nums array and calculates the result.
            for (let i = 1; i < nums.length; i++) {
                value *= nums[i];
            }
            // Pushes said result to the finalArr
            finalArr.push(value);
        }
        // pushes the temporarily removed number to the back of the array.
        nums.push(currentNum);
        // Decrements the currentPosition to stay in line with the last value of the nums array, when it was initially passed in.
        currentPosition--;
    }

    // Returns the finalArr
    return finalArr
};

// Biggest takeaway, I need to focus more on learning the big O calculations. Look up more videos on it as it is starting to become more useful to know what each refers to. There is a difference between
// nested for loops and having two for loops it seems like, but as I said I need to research this way more to better understand.