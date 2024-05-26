const phoneNumberVerifierBooleanDisplay = document.getElementById('phone-number-verifier-display-boolean');
const phoneNumberVerifierNumberDisplay = document.getElementById('phone-number-verifier-display-number');
const phoneNumberVerifierInput = document.getElementById('phone-number-verifier-input');

function phoneNumberVerifier(string) {
    let regexPattern = /(\+1[ -]?)?\(?(?<areaCode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/
    let result = regexPattern.test(string);
    let finalNumber;

    // Run the string through match to pull only the phone number from the input.
    string = string.match(regexPattern);

    if (result) {
        // Displays that the phone number is valid.
        phoneNumberVerifierBooleanDisplay.innerText = 'valid.'

        
        // Check the first element of the array, the whole string, and it with the appropriate syntax without needing to join method or a for loop since the +1 is optional.
        string[1] === undefined ? finalNumber = string[0].replace(regexPattern, '($2) $3-$4') : finalNumber = string[0].replace(regexPattern, '+1 ($2) $3-$4');
        
        // Displays the phone number in the proper syntax.
        phoneNumberVerifierNumberDisplay.innerHTML = finalNumber;
    } else {
        // Displays that the phone number is not valid.
        phoneNumberVerifierBooleanDisplay.innerText = 'not valid.'
    }

    
    
}

function loadEventListeners() {
    phoneNumberVerifierInput.addEventListener('change', (e) => {
        phoneNumberVerifier(e.target.value);
    })
}

loadEventListeners();