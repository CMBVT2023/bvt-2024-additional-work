// This was the first method I used to solve this and it use split along with filtering the array for any white space before it returns the last word.
function lengthOfLastWordV1(s) {
    let arr = s.split(' ')
    arr = arr.filter(item => item !== '')

    let finalWord = arr[arr.length - 1];
    return finalWord.length
};

// This was the second method that I used, it used regex to find all of the potential words, without any whitespace.
function lengthOfLastWordV2(s) {
    let regex = /\w+/g;
    let arr = s.match(regex)

    return (arr[arr.length - 1]).length
};