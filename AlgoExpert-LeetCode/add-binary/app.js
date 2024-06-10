// First attempt, passed the initial test cases but ran into an error in which the value would max out at a number's object.
// Initially I didn't know what this problem was but I tried to change my approach with V2.
function addBinaryV1(a, b) {
    let final = parseInt(a, 2) + parseInt(b, 2);
    return final.toString(2);
}
// Failed with addBinaryV1("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")

// Second attempt, this fixed the incorrect result in the case that a zero value occurs, but I ran into the same issue.
// This time I discovered what the issue was, and it was that I was running into an issue with the maximum value that a number could contain.
function addBinaryV2(a, b) {
    if (0 === parseInt(a)) {
        return b;
    } else if (0 === parseInt(b)) {
        return a;
    } else {
        let final = parseInt(a, 2) + parseInt(b, 2)
        let finalBinary = [];
        let currentNum = final;

        while (currentNum > 0) {
            remainder = currentNum % 2;
            remainder === 1 ? finalBinary.unshift(1) : finalBinary.unshift(0);
            currentNum = currentNum / 2;
        }

        return finalBinary.join('');
    }
};
// Failed with addBinaryV2("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")

// For this attempt, I was able to get past the last wall. I converted my algorithm to use BigInt which could handle a much larger value and it worked.
// Only issue is that the test cases once again exceeded the maximum value again. At first I thought it was because the capcity of a BigInt number was reached but now I know that 
// it was because I didn't convert all parts of my code to BigInt so when attempting to calculate the decimal value from binary, I ended up still utilizing numbers which caused the value to be overloaded. 
function addBinaryV3(a, b) {
    if ("0" === a) {
        return b;
    } else if ("0" === b) {
        return a;
    } else {
        let aBinary = BigInt(0);
        let bBinary = BigInt(0);
        
        a = a.split('');
        b = b.split('');
        for (let i = 0; i < a.length; i++) {
            // While I am converting the value afterwards to a BigInt, the exponential calculation being made is exceeding the maximum value of a number and is thus causing the fail.
        aBinary += BigInt(2**(a.length - i - 1) * a[i])
        }
        for (let i = 0; i < b.length; i++) {
        bBinary += BigInt(2**(b.length - i - 1) * b[i])
        }
        
        let finalTotal = aBinary + bBinary

        return finalTotal.toString(2)
    }
}
// addBinaryV3("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
// "1")


// I could not get my own method of using boolean addition for binary to work, so I had to look up a solution.
// // https://medium.com/thecodingway/understanding-and-implementing-binary-addition-in-javascript-bb95a328785c
// I ended up looking at their solution and comparing it to what I had, I over complicated things with if statements since I was trying to avoid any addition or arithmetic operations
// because of the issues I ran into before hand. I now realize that using it for each individual place is feasable and would not cause the error I ran into originally.
// I also tried to use for loops but I ran into issues with the two different lengths of the words. The while loop allows the index values to go below zero without any consequences or throwing any errors.
// This method is entirely taken from the site which is dissapointing since I couldn't figure it out on my own.
function addBinaryV4(a, b) {
    if ("0" === a) {
        return b;
    } else if ("0" === b) {
        return a;
    } else {
        let finalResult = '';
        let binaryA = a.length - 1;
        let binaryB = b.length - 1;
        let remainder = 0;

        while (binaryA >= 0 || binaryB >= 0) {
            let bitA = binaryA >= 0 ? parseInt(a[binaryA]) : 0;
            let bitB = binaryB >= 0 ? parseInt(b[binaryB]) : 0;
            let sum = bitA + bitB + remainder;
            
            finalResult = (sum % 2) + finalResult;
            remainder = Math.floor(sum/2);

            binaryA--;
            binaryB--;
        }

        if(remainder > 0) {
            finalResult = remainder + finalResult;
        }

        return finalResult;
    }
}


// I can't make this up, I was literally one change away from making the BigInt method I had work, the biggest problem I was running into was the lack of a parseInt method that allow me to convert
// the binary string to a BigInt number and my first attempt around that didn't work since I was actively adding or calculating the binary number, I did not change the correct numbers to BigInt
// numbers, there were still calculations being made with regular numbers, after reading the docs and looking at the solutions of others, I final found out how to convert numbers from binary into BigInt
// values, and that is by inserting a "0b" to the start of the string to show the radix of the number. This made it much easier since I could now 

// This so far is likely the most efficient method, not only does it handle the conversion between a string to a BigInt but it even handles the second conversion too without much code.
function addBinaryV5(a, b) {
    let binaryA = BigInt(`0b${a}`);
    let binaryB = BigInt(`0b${b}`);

    let sum = binaryA + binaryB;

    return sum.toString(2);
}

// I wanted to go back and make my method work since I now understood its limitations and issues, I wanted to make sure that my own method worked and while it may not be the most efficient,
// I could at least know I found a way to solve this with my own process.
function addBinaryV6(a, b) {
    let aBinary = 0n;
    let bBinary = 0n;
    
    a = a.split('');
    b = b.split('');
    for (let i = 0; i < a.length; i++) {
    aBinary += BigInt(2n ** (BigInt(a.length) - BigInt(i) - 1n) * BigInt(a[i]))
    }
    for (let i = 0; i < b.length; i++) {
        bBinary += BigInt(2n ** (BigInt(b.length) - BigInt(i) - 1n) * BigInt(b[i]))
    }
    
    let finalTotal = aBinary + bBinary

    return finalTotal.toString(2)
}
// // Yeah I really was two lines of code away from solving it on my own.
// // Not only that but this method even with its biggest flaw, converting binary from decimal without necessarily needing to, it still beats the boolean algebra method I failed to figure out 
// // on my own.


// My biggest takeaway from this is that rather than assuming, I need to 100% confirm it. I just instinctively assumed that the BigInt value was being exceeded but I should have 
// instead looked it up and confirmed it, had I done that I would have discovered that I was in fact within range and could have had the potential to go look elsewhere for the issue. Plus, I just
// assumed that the mdn docs mentioning that parseInt did not work on BigInt, then there was no other method for specifying a radix. While I am disappointed that I gave up too quickly and switched to
// a method that I knew would be more complicated, I am glad that I went back and saw how close I actually was. Had I taken a couple of seconds to trouble shoot and confirm things, I would have
// understood the issue and solved it my way initially.

const binaryOneDisplay = document.getElementById('binary-one-display');
const binaryTwoDisplay = document.getElementById('binary-two-display');
const resultDisplay = document.getElementById('result-display');
const binaryOneInput = document.getElementById('first-number-input');
const binaryTwoInput = document.getElementById('second-number-input');
const showResultButton = document.getElementById('show-result');

function limitInput(e) {
    let key = e.target;
    let badKeys = /[^01]+/gi

    key.value = key.value.replace(badKeys, '');
}

function loadEventListeners() {
    binaryOneInput.addEventListener('keyup', (e) => {
        limitInput(e);
    })
    binaryTwoInput.addEventListener('keyup', (e) => {
        limitInput(e);
    })
    binaryOneInput.addEventListener('change', (e) => {
        binaryOneDisplay.innerHTML = binaryOneInput.value === '' ? 0 : binaryOneInput.value;
    })
    binaryTwoInput.addEventListener('change', (e) => {
        binaryTwoDisplay.innerHTML = binaryTwoInput.value === '' ? 0 : binaryTwoInput.value;
    })
    showResultButton.addEventListener('click', () => {
        let result = addBinaryV5(binaryOneInput.value === '' ? 0 : binaryOneInput.value, binaryTwoInput.value === '' ? 0 : binaryTwoInput.value);
        resultDisplay.innerHTML = result;
    })
}

loadEventListeners()