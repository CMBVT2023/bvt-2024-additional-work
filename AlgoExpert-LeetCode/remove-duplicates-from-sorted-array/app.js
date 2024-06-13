// This was my first successful method I found to solve this problem, it seems to fall in the middle on time complexity and memory use so I wanted to try and find a way to optimize it more or
// find a better way to improve it.
function removedDuplicatesV1(nums) {
    let unique = 0;
    let currentNum;

    for (let i = 0; i < nums.length; i++) {
        if (currentNum === nums[i]) {
            nums[i] = '_';
        } else {
            currentNum = nums[i];
            if(nums.indexOf('_') < i && nums.indexOf('_') !== (-1)) {
                [nums[nums.indexOf('_')], nums[i]] = [nums[i], nums[nums.indexOf('_')]];
            }
            unique++;
        }
    }

    return unique;
};