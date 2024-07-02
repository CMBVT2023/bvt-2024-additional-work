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