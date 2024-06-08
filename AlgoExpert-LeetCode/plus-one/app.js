// This was the method I used to solve this problem, much like the binary adding one, this one ran into a limitation involving the size of the number object.
// To solve this issue I used BigInt and then converted the value to a string and specifying the decimal radix.
function plusOneV1(digits) {
    let num = (BigInt(digits.join('')) + 1n).toString(10).split('');

    return num;
}