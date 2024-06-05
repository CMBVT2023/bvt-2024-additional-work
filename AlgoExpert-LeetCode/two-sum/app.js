// This so far is the best method I could discover, it is a nested for loop so the time required is above the challenge that was set but it does work well.
function twoSumV1(nums, target) {
    twoSum = function(nums, target) {
        // // PseudoCode for the program
        // Create a for loop that will loop through the nums array,
        // (Check if the first selected value is greater than or equal to the target, 
        // // if so move on to the next value) Ended up removing this as it caused issues if the numbers were negative
        // nest a second for loop that will loop through the remaining values and compare the added results to the target.
        // If these values meet the target, return the value of the current iterate of the first for loop, then use indexOf to return the index of the second value in the array.
    
    
        for (let i = 0; i < nums.length; i++) {
            for (let l = i + 1; l < nums.length; l++) {
                if (nums[i] + nums[l] === target) {
                    return [i, l];
                }
            }
        }
    };
}

// This method uses only 1 for loop but somehow it takes longer than the other method to execute but it does work, I think replacing it with a while loop might work better
function twoSumV2(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let potential = nums.lastIndexOf(target - nums[i]) 
        if (potential !== -1 && potential !== i) {
            return [i, potential]
        }
    }
}