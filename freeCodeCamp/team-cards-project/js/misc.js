export function spinalTapConversion(str) {
    // Uses .replace() to replace any instance where a lowercase character is followed by a uppercase, and it simply inserts a space between the two.
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Initializes the regexPattern variable that looks for all spaces or "_".
    let regexPattern = /[ _]/g;

    // Uses .split() method with the regexPattern to split the string at all spaces or "_" and then joins the words with a "-" and then converts any uppercase character to lowercase.
    return str.split(regexPattern).join('-').toLowerCase()
}

export function capitalizeName(str) {
    let arr = str.split(' ');
    for (const index in arr) {
        arr[index] = arr[index][0].toUpperCase() + arr[index].substring(1);
    }
    return arr.join(' ');
}