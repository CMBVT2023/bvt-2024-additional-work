// This was my first attempt at the problem, I knew initially that this method would be inefficient but I still started this way to help me figure out the water trapped calculation.
// This method failed at test case 55 as it became too inefficient considering the amount of items in the array. There is a lot to improve but the basic idea is there.
function containerWithMostWaterVAlpha(height) {
    // // // Pseudo Code:
    // Take in an array of various heights and iterate through the array,
    // Starting from the left, take the height of the wall and set it equal to wall one,
    // then from the right, take the first wall and set it equal to wall two, calculate the amount
    // of water that this container can hold, the calculation will be based on the height of the lowest wall.
    // // Set this hold value only if the value is higher than the previous, the initial value will be set to zero.

    let waterTrapped = 0;

    for (let i = 0; i < height.length; i++) {
        let wallOne = height[i];
        for (let j = i; j < height.length; j++) {
            let wallTwo = height[j];
            let water = (wallOne > wallTwo ? wallTwo * (j - i) : wallOne * (j - i));
            water > waterTrapped ? waterTrapped = water : '';
        }
    }

    return waterTrapped;
};

// This method was a success, and it took only 62ms on average to run, which beat out 80% of other submissions. Memory wise, it took around 56mb and beat out 67% of other submissions.
// This method uses two points and a while loop, depending on the value either pointer, the lowest value height wise will be changed. Rather than iterating through the entire array multiple
// times like the first method, this one goes through it a singular time at most. The array is read at the start and end simultaneously, which the amount of times the while loop iterates 
// height.length / 2, making this method efficient even if the array has a large number of elements. I do believe that there are improvements that I can make for this method.
function containerWithMostWaterV1(height) {
    let waterTrapped = 0;
    let wallOne = 0;
    let wallTwo = height.length - 1;

    while (wallOne < wallTwo) {
        let water = (height[wallOne] > height[wallTwo] ? height[wallTwo] * (wallTwo - wallOne) : height[wallOne] * (wallTwo - wallOne));
        water > waterTrapped ? waterTrapped = water : '';
        
        height[wallOne] > height[wallTwo] ? wallTwo -= 1 : wallOne += 1;
    }

    return waterTrapped;
};

// This method is more efficient than the previous in terms of speed. Memory wise it does use more memory, but only around 2mb more for a 5ms time decrease. This method removes the need
// to temporarily store the water calculation and compare it to the current highest amount of water trapped.
function containerWithMostWaterV2(height) {
    let waterTrapped = 0;
    let wallOne = 0;
    let wallTwo = height.length - 1;

    while (wallOne < wallTwo) {
        if (height[wallOne] > height[wallTwo]) {
            waterTrapped < (height[wallTwo] * (wallTwo - wallOne)) ? waterTrapped = height[wallTwo] * (wallTwo - wallOne) : '';
        } else {
            waterTrapped < (height[wallOne] * (wallTwo - wallOne)) ? waterTrapped = height[wallOne] * (wallTwo - wallOne) : '';
        }
        
        height[wallOne] > height[wallTwo] ? wallTwo -= 1 : wallOne += 1;
    }

    return waterTrapped;
};

// This method utilizes nested if statements as opposed to the ternary operator, and it decreases the speed by a lot, this really goes to show that the ternary operator should be used in place of nested
// if statements. While the initial if statement did help to decrease time, strictly using them can increase time.
function containerWithMostWaterVBeta(height) {
    let waterTrapped = 0;
    let wallOne = 0;
    let wallTwo = height.length - 1;

    while (wallOne < wallTwo) {
        if (height[wallOne] > height[wallTwo]) {
            if (waterTrapped < (height[wallTwo] * (wallTwo - wallOne))) {
                waterTrapped = height[wallTwo] * (wallTwo - wallOne)
            }
        } else {
            if (waterTrapped < (height[wallOne] * (wallTwo - wallOne))) {
                waterTrapped = height[wallOne] * (wallTwo - wallOne)
            }
        }
        
        height[wallOne] > height[wallTwo] ? wallTwo -= 1 : wallOne += 1;
    }

    return waterTrapped;
};


//  My biggest takeaway has to be that, even if the code it self has more lines, it means nothing. At first, I thought my nested for loops might actually be viable until I further thought
// it out and realized that I was iterating through all elements in the array multiple times. Even though my code was only 5ish long lines, and my final submission was larger line wise, it runs far
// quicker simply because of the methods it utilizes. While I knew that the amount of lines in the code doesn't equate to speed, it is always good to confirm it and see the difference in a real
// scenario. Also, I learned that the ternary operator is very useful and that it is not always better than an if statement. While I initially used all ternary operators in my first iteration,
// switching to a if statement for the first check made the code more efficient. However, trying to nest an if statement within it actually made it less efficient, so like most things, when using
// a ternary operator in place of a if statement depends. In this case, since the first check would be difficult to implement with a ternary operator, it made more sense to use the if statement. 
// In the end, it is better to be open to use what is best in the situation and not be tied down or strictly use only one method, like using only for loops instead of while loops. 