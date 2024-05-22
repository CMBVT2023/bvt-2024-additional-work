// Bubble sort is traversing through the array and at each point, we will check if the current number and the number next to it are in the right order, if the
// current number is smaller or equal to the next number, if they are we move on, else we swap the two numbers. Once we reach the end we will then go through a final iteration
// only if we swapped any elements in the array. Elements are swapped in place as opposed to making a new array.

// If you can find the largest value and move it to the end, then you no longer need to move said biggest number or check it at the end of the array
function bubbleSort(arr) {
    // // Oops I coded for selection sort XD
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let l = i + 1; l < arr.length; l++) {
    //         if (arr[i] > arr[l]) {
    //             [arr[i], arr[l]] = [arr[l], arr[i]]
    //             let temp = arr[i];
    //             arr[i] = arr[l];
    //             arr[l] = temp;
    //         }
    //     }
    // }

    // Bubble sort method, most effective since it will stop sorting once the array is already sorted, as opposed to going through the whole array.
    let notSorted = true;
    while (notSorted === true) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                } else {
                    notSorted = false
                }
            }
        }
    }

    return arr
}


let arr = [5, 15, 8, 9]
console.log(bubbleSort(arr));