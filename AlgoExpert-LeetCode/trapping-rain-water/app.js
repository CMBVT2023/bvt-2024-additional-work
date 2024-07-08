// This was my original method that did not solve the problem, it ran into a lot of issues in regards to the right boundary since there was no straightforward way to have it,
// recheck the last max height once the array was iterated through.
function trappingRainWaterVAlpha(height) {
    let waterTrapped = 0;

    for (let i = 1; i <= height.length - 1; i++) {
        let wallOne = 0;
        let wallTwo = 0;

        if (height[i - 1] > height[i]) {
            wallOne = height[i - 1];
            wallTwo = 0;
            for (let j = i; j <= height.length - 1; j++) {
                if (wallOne <= height[j]) {
                    wallTwo = height[j]
                    j = height.length + 1;
                } else if (j == height.length - 1) {
                    wallTwo = height[j];
                }
            }
            console.log(wallOne, wallTwo)
        }

        while(wallOne > height[i] && wallTwo > height[i]) {
            waterTrapped += (wallOne > wallTwo ? wallTwo - height[i] : wallOne - height[i])
            i++
        }
        console.log(`position: ${i}, water: ${waterTrapped}`)
    }

    return waterTrapped;
};

// This method does solve the issue but it is not one I came up with, I had to look up the answer for this problem since I was stuck for a good while.
// This method uses two points that will go through the array and stop each time the wall on the right is greater than the wall on the left, then it will go through the array until the left pointer 
// is equal or greater than the right pointer. This method relies on finding the average using math via the difference in height of the current max height on the left or right and the current position of the left or right,
// and then using the Math.max() method it sets the leftMax to what ever value is larger.. I was unable to solve this on my own after trying for a while since I was not sure how to find the average and instead tried to isolate
// the various containers that would trap the water, which lead to the problems I found in the previous method. Again, while I am disappointed that I couldn't solve this on my own, I at least now understand that I should start
// seeing if there are other ways to solve problems that are easier to implement coding wise, even if it means I need to look up math formulas or methods to solve these problems.
function trappingRainWaterV1(height) {
    let trappedWater = 0;
    let left = 0
    let leftMax = height[left]
    let right = height.length - 1;
    let rightMax = height[right]

    while (left < right) {
        if (leftMax <= rightMax) {
            trappedWater += leftMax - height[left];
            left++
            leftMax = Math.max(leftMax, height[left]);
        } else {
            trappedWater += rightMax - height[right];
            right--
            rightMax = Math.max(rightMax, height[right]);
        }
    } 

    return trappedWater;
};

// Biggest takeaway, by far, my biggest takeaway is seeing how much I struggled to deal with pointers and my reliance on for loops. While for loops are not inherently bad and even nested for loops have their uses, they are not
// the method I should try and adopt right away without fully understanding what I am trying to accomplish. Also, when it comes to leet code or algorithm questions like this, I need to start looking more into finding the formula or
// thinking about the solution more as my lack of doing so is causing me to try and brute force the solution. In doing it this way, I am creating solutions that don't work once a lot of data is run through them or that take forever.
// If I start to truly try and understand what the issue or problem I am trying to solve needs in order to be satisfied in all cases, then I should be able to start finding patterns or know to search up formulas that can make solving
// the problem far easier and more straight forward.

// Initializes the html elements from the webpage.
const initialDisplay = document.getElementById('initial-display');
const resultDisplay = document.getElementById('result-display');
const radioOptions = document.getElementById('radio-options').querySelectorAll('input');

// Displays the results from the algorithm.
function displayResult(num) {
    // Initializes a variable to store an array
    let containerArray = [];
    // Checks the value of the number passed in and stores its associated array in the containerArray variable
    if (num == 0) {
        containerArray = [0,1,0,2,1,0,1,3,2,1,2,1];
    } else if (num == 1) {
        containerArray = [4,2,0,3,2,5];
    }

    // Displays the initial array in the initial display element.
    initialDisplay.innerHTML = JSON.stringify(containerArray);

    // Displays the algorithm's result in the result display element.
    resultDisplay.innerHTML = trappingRainWaterV1(containerArray);
}
// Loads the default eventListeners for the webpage.
function loadEventListeners() {
    // Iterates through the radio elements on the webpage.
    for (const radio of radioOptions) {
        // Initializes an evenListener for each radio element that calls the displayResult function.
        radio.addEventListener('change', () => {
            displayResult(radio.value)
        })
    }
}

loadEventListeners();