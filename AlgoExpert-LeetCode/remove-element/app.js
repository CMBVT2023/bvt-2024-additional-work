// This was my first attempt at this problem, it used the two pointer method that I started learning about from the last couple of problems. In this case, I was successfully able to adapt the method
// to create a decently optimized process. Luckily, I remembered some of my other problems that in which I attempted to strictly implement a previous method as opposed to trying to adapt it more
// to fit the problem and keep only the fundamentals. By remembering my past mistakes, I was able to solve this relatively quickly even with a few minor mistakes, and I was able to do so while creating a 
// optimized method since it beats 76% on speed with 50ms runtime, but memory wise it doesn't do as well since I initialized multiple variables, with it beating only 12% and using around 50mb of space.
// Overall, I am happy with my first attempt at this problem, but I also know that there are some things I can do to optimize this a bit more, but I am happy that I was able to get it to be of linear
// time complexity and not quadratic like most of my other first attempts, ie I didn't rely on nested for loops right away.
function removeElementV1(nums, val) {
    // // // Pseudo Code:
    // Take in an array and a value,
    // Iterate through the array and each time an element matches the passed in value, move said value to the end of the array.
    // // Keep a running total of the amount of times each one of the element is equal to the value passed in.

    // Initialize a pointer to the last element in the array.
    let right = nums.length - 1;
    // Initialize a pointer to the first element in the array.
    let left = 0;
    // Initialize a variable to keep a tally of the total elements equal to the value passed in.
    let count = 0;

    while (left <= right) {
        if (nums[right] === val) {
            right--;
            count++;
        } else if (nums[left] === val && nums[right] !== val) {
            [ nums[left], nums[right] ] = [ nums[right], nums[left] ];
            right--;
            count++;
            left++
        } else {
            left++;
        }
    }

    return nums.length - count;
};