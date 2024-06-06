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

// I ended up switching to the while loop and it is actually slower again. It seems that the indexOf use is causing this delay so I'm going to try and find a way around it.
function twoSumsV3(nums, target) {
    let num = 0;
    let found = false;
    let result = [];

    while (found === false) {
        let currentNum = nums.lastIndexOf(target - nums[num])
        if (currentNum !== -1 && currentNum !== num) {
            result = [num, currentNum];
            found = true;
        }
        num++;
    }

    return result;
};

// After looking at some of the discussion, people recommended doing it with a hashmap. While I initially attempted this, I ran into the problem since I was using arrays, I had to either shallow
// copy the array and then use indexOf to find the potential value which was causing a lot of additional time to execute. The couple of comments I found recommended using a object instead,
// this allows me to not only store the seen value but to also include where its index is in the array.
function twoSumsV4(nums, target) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        let potential = target - nums[i];
        if (seen.hasOwnProperty(potential) && seen[potential] !== i) {
            return [i, seen[potential]];
        } else {
            seen[nums[i]] = i;
        }
    }
};


// Biggest takeaway, just because something works does not mean it can't become more optimized. Even milliseconds add up and can result in a lot of time being spent when all one has to do is
// spend a bit more time rewriting or finding a better solution. While it may seem like a waste of time, it almost never is since finding a way to save time will add up greatly in the long run.
// There is a point of diminishing return so I shouldn't become too obsessive with it, like my first solution was only around 80ms to execute while this newest one was around 40ms. It is double the 
// time but it still works if needed. However, in the case of my other solutions that used around 250ms of time, that is by far a much greater increase and makes the time spent finding a 
// better solution far more worth it.