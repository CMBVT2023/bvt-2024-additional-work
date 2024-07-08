// This is my initial solution to this problem, it utilizes the built in sort method to sort the entire array in non-decreasing order after merging all elements in the two arrays into a single array.
// This method falls into the middle time and memory use wise, with 55ms and 49mb respectively. This method is a good start and I think there are some ways to optimize it further.
function mergeSortedArrayV1(nums1, m, nums2, n) {
    // // Pseudo Code: 
    // Take in two arrays and the length of each array as separate numbers.
    // Take the first array, nums1, and insert all values from nums2 while keeping the array sorted in non-decreasing order.
    // Nums1 should be modified in place to store the values

    let currentPosition = 0;

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0 && currentPosition < n) {
            nums1[i] = nums2[currentPosition];
            currentPosition++
        }
    }

    nums1.sort((a, b) => {
        return a - b;
    })
};

// I was able to improve the method even further, this method is now beats around 95% of others in speed and 92% of others in memory. I was able to accomplish this by further increasing
// my understanding of the problem. Rather than needing to check is the current number from nums1 array is equal to zero, starting the loop at the passed in m value which indicates that amount of 
// non-zero integers currently in the array. Also, I found that it is unnecessary to check that the currentPosition value does not exceed the value of n since the nums1 array already has the
// necessary amount of spots available to store all elements from nums2. 
function mergeSortedArrayV2(nums1, m, nums2, n) {
    let currentPosition = 0;

    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[currentPosition];
        currentPosition++
    }

    nums1.sort((a, b) => {
        return a - b;
    })
};

// Utilizing the external solution that I found, I was able to fix my attempted solution for O(m + n) and figure out where I went wrong. First off, I did not think that starting from the back of the second 
// array would be the best option since it would allow me to focus on sorting the largest of numbers first and not run into the issue of having smaller values that needed to move multiple spaces, which 
// would make the time complexity shoot up. Second, it made me realize that the biggest reason I was struggling to get this for loop to improve time wise, since it almost always ran as well as or even slower
// than my previous solution was because I had never set up check to see if all of the element were sorted and instead had the for loop run until the value m + n - 1 was reached, ie it iterated through
// the for loop entirely even if it didn't need to. Again, while I needed outside help to get this answer, it allowed me to find further insights and showed me how important critical think and sometimes even drawing
// out the problem is when trying to come up with solution.
function mergeSortedArrayV3(nums1, m, nums2, n) {
    let num2Position = n - 1;
    let num1Position = m - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (nums1[num1Position] > nums2[num2Position] && num1Position >= 0) {
            nums1[i] = nums1[num1Position]
            num1Position--;
        } else if (num2Position >= 0){
            nums1[i] = nums2[num2Position];
            num2Position--;
        } else if (num2Position < 0) {
            i = -1;
        }
    }

    return nums1;
};


// This was the method that I found under solutions when trying to figure out how to make it O(m + n) and while I know I didn't need to, I wanted to make sure I understood the difference and to
// understand how one would implement this time complexity. This solution is not my own but it did help provide me a realization moment that I greatly overlooked when trying to come up with 
// the solution on my own.
function mergeSortedArrayVExternalSolution(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};




// Biggest takeaway, by far, the biggest thing I learned was how helpful writing things out and just drawing how the algorithm is supposed to work. I was completely stumped and was stuck on
// a certain part of the problem yet I was able to over come it by drawing what my code should be doing. This helped me fix some bugs and errors I came across and without attempting this 
// I would have still been stuck. Also, once again, I need to start looking at the provided info for the problem because the thing that caused me the most problems and that left me without a solution
// to solve it, was actually avoidable had I realized that both arrays were sorted already, not just the first one. Had I realized that, I would have known that starting from the back of the second
// array would have provided me the largest value in that array without me having to worry or implement a case in which a lower value occurred after a large value.

// Initializes all html elements from the webpage.
const initialArrayOneDisplay = document.getElementById('initial-array-one-display');
const initialArrayTwoDisplay = document.getElementById('initial-array-two-display');
const resultDisplay = document.getElementById('result-display');
const radioOptions = document.getElementById('radio-options').querySelectorAll('input');

// Displays the result of the algorithm.
function displayResult(num) {
    // Initializes the various variables that will be passed through to the algorithm.
    let arrayOne = [];
    let arrayTwo = [];
    let lengthOne = 0;
    let lengthTwo = 0;

    // Checks the value of the number passed in and assigns the various variables to their associated values.
    if (num == 0) {
        arrayOne = [1,2,3,0,0,0];
        arrayTwo = [2,5,6];
        lengthOne = 3;
        lengthTwo = 3;
    } else if (num == 1) {
        arrayOne = [4,5,6,0,0,0];
        arrayTwo = [1,2,3];
        lengthOne = 3;
        lengthTwo = 3;
    } else if (num == 2) {
        arrayOne = [0];
        arrayTwo = [1];
        lengthOne = 0;
        lengthTwo = 1;
    }

    // Displays the two initial arrays in the initialDisplay elements.
    initialArrayOneDisplay.innerHTML = JSON.stringify(arrayOne);
    initialArrayTwoDisplay.innerHTML = JSON.stringify(arrayTwo);

    // Displays the final result in the resultDisplay element.
    resultDisplay.innerHTML = JSON.stringify(mergeSortedArrayV3(arrayOne, lengthOne, arrayTwo, lengthTwo));
}

// Loads all the default eventListeners for the webpage
function loadEventListeners() {
    // Iterates through and initializes an eventListener for each radio input on the webpage.
    for (const radio of radioOptions) {
        radio.addEventListener('change', () => {
            displayResult(radio.value);
        })
    }
}

loadEventListeners();