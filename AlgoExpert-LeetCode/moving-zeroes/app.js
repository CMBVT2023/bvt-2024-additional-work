// This is my first method to solve the problem. Unsurprisingly it is not efficient in terms of memory and speed since it uses a nested for loop and has no way to flag when all zeros are already at
// the end of the array, meaning that it will continue to loop even when all zeros are at the end of the array. There are a lot of improvements that can be made, but I wanted to at least
// get the general concept and understandings down by solving the problem first.
function movingZeroesV1(nums) {    
    
    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === 0) {
            let switchingPosition = i + 1;
            while (nums[switchingPosition] === 0 && switchingPosition < nums.length - 1) {
                switchingPosition++;
            }
            [nums[i], nums[switchingPosition]] = [nums[switchingPosition], nums[i]];
        }
    }
    
};

// This method was based on one of the solution I found, I was starting to get stumped on how to implement a way to count the number of zeros so that the algorithm would know when its sorted all of
// the zeros to the end, but now I know the problem of thinking like this. I thought that finding a way to include this information would help but it actually caused the program to run longer.
// Even though this method doesn't check when zeros are all moved to the end and iterates through the array every time, since it does so linearly it is actually not that problematic.
// By trying to implement a way to do so I kept adding a while or for loop, as shown in my previous method, or other built in methods like indexOf to find zeros which made the run time far longer
// than any linear loop would be. The other thing this method improves upon is the way the second pointer is handled, in my original method, the second pointer is constantly reinitialized to the position
// after the first pointer, meaning that on each loop I am adding unnecessary time, and by creating the second pointer and only incrementing it when necessary, this solution is able to stay linear.
function movingZeroesV2(nums) {
    let switchingPosition = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [ nums[i], nums[switchingPosition] ] = [ nums[switchingPosition], nums[i] ];
            switchingPosition++;
        }
    }
};


// Biggest Takeaway, trying to over optimize things is a problem. In my attempt to improve my first method, rather than trying to change my approach or see if I could remove the while loop, I instead 
// focused on trying to find a way to count the number of zeros and to see when all of them are past the last non-zero value. Yeah, writing this out really shows me how wrong my methodology was. I focused
// too much on improving the wrong thing and it caused me to overlook the most important thing, the base code. Trying to optimize my approach resulted in me adding loops to ensure that all things worked,
// which kept extending the time, even though the V2 method always runs through the entire array, simply because it does so only once makes it more efficient than my method could even be. Even after some
// more time and thinking, I don't believe that my first method could ever be improved since initializing the switching position outside of the if statement would causes issues when moving the zeros, ie 
// the zeros could be moved back to the front under certain circumstances. Overall, instead of wasting time and attempting to stick with my original method, I should have tried to find a way to swap out
// what I did or see if I could transform it to a linear equation in some way, since even if said way required me to iterate through the entire array, it would have still been an improvement.