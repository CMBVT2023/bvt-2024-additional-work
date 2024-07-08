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

    // Loops until the finalArr is equal in size to the nums array.
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

// This method was based on the various ones I found under the solutions tab. This method utilizes a pre and suffix multiplication system, all of the values in the various positions represent
// the product of the numbers multiplied up to that point, whether it be starting from the left to right for the pre or from right to left with the suffix. Rather than having to calculate all of the 
// products for all numbers to the left and right of the current position, simply taking the number at the same position in both the pre and suffix array and multiply them would provide the result.
// While I initially thought using three for loops would increase run time, the fact that they are not nested within each other makes a huge difference, and is what allows this method to remain linear,
// since the loops are all independent of each other. 
function productOfArrayV2(nums) {
    // Initializes three arrays, two are created with an length equal to the passed in nums array and are filled with 1s to make the multiplication in place possible, and the last array
    // is empty.
    let left = Array(nums.length).fill(1);
    let right = Array(nums.length).fill(1);
    let finalArr = [];

    // Loops through the left array, going from left to right and starting at its second position.
    for (let i = 1; i < nums.length; i++) {
        // Sets the current position equal to the product of the value of the previous array element and the corresponding position of said element in the nums array.
        left[i] = left[i - 1] * nums[i - 1];
    }

    // Loops through the right array, going from right to left and starting at the penultimate position.
    for (let i = nums.length - 2; i >= 0; i--) {
        // Sets the current position equal to the product of the value of the next array element and the corresponding position of said element in the nums array.
        right[i] = right[i + 1] * nums[i + 1];
    }

    // Loops through the finalArray whose length will be equal to that of the passed in nums array,
    // the two arrays will always share the same length values so it is unnecessary to declare the finalArray length before hand.
    for (let i = 0; i < nums.length; i++) {
        // Pushes the product of the value at the specified point in the left and right array, multiplying the two array elements results in the value of all
        // the products of the nums array while excluding the value at the current position.
        finalArr.push(left[i] * right[i])
    }

    // Returns the finalArray
    return finalArr
};

// Biggest takeaway, I need to focus more on learning the big O calculations. Look up more videos on it as it is starting to become more useful to know what each refers to. There is a difference between
// nested for loops and having two for loops it seems like, but as I said I need to research this way more to better understand. In terms of the actual problem, I am now realizing how big of a difference there
// is between running multiple for loops versus running nested for loops. These problems are very helpful in highlighting how much of a difference there is with linear and quadratic time complexity equations.
// Knowing this has changed my approach going forward since I am now hesitant to use nested for loops unless necessary. Also, it has changed my view of running multiple for loops separately as I thought that
// if nested for loops are too inefficient, then so are multiple for loops in general, I now realize that I am wrong. Still, problems like these have been very helpful in shifting my focus from getting
// things to simply work, to instead try and make things work in a optimal way and to treat it like every algorithm I create would be used in the real world, making it useful to find ways to make it quicker or 
// use less memory.

// Initializes all html elements from the webpage.
const initialDisplay = document.getElementById('initial-display');
const resultDisplay = document.getElementById('result-display');
const radioOptions = document.getElementById('radio-options').querySelectorAll('input');

// Displays the result of the algorithm.
function displayResult(num) {
    // Initializes a variable to store an array.
    let numArray = [];
    // Checks the value of the passed in number and the associated array is set to the numArray variable.
    if (num == 0) {
        numArray = [1,2,3,4];
    } else if (num == 1) {
        numArray = [-1,1,0,-3,3];
    } else if (num == 2) {
        numArray = [12,59,2,3,5,4,8,9,2,18,20];
    }

    initialDisplay.innerHTML = JSON.stringify(numArray);

    resultDisplay.innerHTML = JSON.stringify(productOfArrayV2(numArray));

}

// Loads all default eventListeners for the webpage.
function loadEventListeners() {
    for (const radio of radioOptions) {
        radio.addEventListener('change', () => {
            displayResult(radio.value);
        })
    }
}

loadEventListeners();