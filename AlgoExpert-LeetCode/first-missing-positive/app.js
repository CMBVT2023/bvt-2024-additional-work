// This was my initial method to solve this problem. With this method, I was around 116ms in speed which isn't too good,
// as I am in the bottom 12% and memory wise I am beat around 60% of others with only 59mb of memory. With all this being said, I did have to use the sort method but at this moment I am almost
// positive this results in my method being quadratic instead of linear, but seeing as this method did not exceed the time limit like it would with a nested for loop implementation I am not entirely
// sure. There should be some things I can do to optimize this more.
function firstMissingPositiveV1(nums) {
    // // Pseudo Code:
    // Take in an array of numbers,
    // initialize a new variable that will store the currentPositiveInteger.
    // Iterate through the array of numbers and find if the value of currentPositiveInteger is present,
    // If the integer is not present, then return said integer since it is missing from the array,
    // if the integer is present, then increment the currentPositiveInteger.
    let currentPositiveInteger = 1;
    nums.sort((a, b) => {
        return a - b;
    });
    let startingNum = nums.indexOf(currentPositiveInteger);

    if (startingNum === -1) {
        return currentPositiveInteger
    } else {
        for (let i = startingNum; i < nums.length; i++) {
            if (nums[i] === currentPositiveInteger) {
                currentPositiveInteger++;
            }
        }
        return currentPositiveInteger
    }
};

// At this moment, I am not sure how I could potentially improve this method any more, I think the only way to solve this problem faster is only doable by switching how this problem is solved.
function firstMissingPositiveV2(nums) {
    let currentPositiveInteger = 1;
    nums.sort((a, b) => {
        return a - b;
    });
    let startingNum = nums.indexOf(currentPositiveInteger);

    if (startingNum === -1) {
        return currentPositiveInteger;
    }
    
    for (let i = startingNum; i < nums.length; i++) {
        nums[i] === currentPositiveInteger ? currentPositiveInteger++ : '';
    }

    return currentPositiveInteger;
};

// I found another small improvement with this method but as of now, this is the best I could do to improve this, I am going to try and solve this with a hashmap next or using an array to store
// the possible values or "seen" values as I noticed in other solutions.
function firstMissingPositiveV2Beta(nums) {
    let currentPositiveInteger = 1;
    nums.sort((a, b) => {
        return a - b;
    });
    let startingNum = nums.indexOf(currentPositiveInteger);

    if (startingNum === -1) {
        return currentPositiveInteger;
    }

    for (let i = startingNum; i < nums.length; i++) {
        if (nums[i + 1] === currentPositiveInteger && nums[i] == currentPositiveInteger) {
            currentPositiveInteger++;
            i++;
        } else if (nums[i] == currentPositiveInteger) {
            currentPositiveInteger++
        }
    }

    return currentPositiveInteger;
};