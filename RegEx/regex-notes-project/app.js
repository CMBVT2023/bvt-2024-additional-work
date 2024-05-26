const phoneNumberVerifierBooleanDisplay = document.getElementById('phone-number-verifier-boolean-display');
const phoneNumberVerifierNumberDisplay = document.getElementById('phone-number-verifier-number-display');
const phoneNumberVerifierInput = document.getElementById('phone-number-verifier-input');

const emailVerifierBooleanDisplay = document.getElementById('email-verifier-boolean-display');
const emailVerifierMainEmailDisplay = document.getElementById('email-verifier-main-display');
const emailVerifierEmailUserDisplay = document.getElementById('email-verifier-user-display');
const emailVerifierEmailDomainDisplay = document.getElementById('email-verifier-domain-display');
const emailVerifierInput = document.getElementById('email-verifier-input');

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

function emailVerifier(string) {
    let regexPattern = /(?<email>\d|\w+)(?<domain>@[a-z|A-z]+\.com)/
    let result = /.+@.+\.com/.test(string)

    string = string.match(regexPattern);

    if (result && string !== null) {
        emailVerifierBooleanDisplay.innerText = 'has a \'@\' and a \'.com\'.';

        emailVerifierMainEmailDisplay.innerText = string[0];

        emailVerifierEmailUserDisplay.innerText = string.groups.email;

        emailVerifierEmailDomainDisplay.innerText = string.groups.domain;
    } else {
        emailVerifierBooleanDisplay.innerText = 'does not have a valid \'@\' and a \'.com\'.';

        emailVerifierMainEmailDisplay.innerText = ``;
        emailVerifierEmailUserDisplay.innerText = ``;
        emailVerifierEmailDomainDisplay.innerText = ``;
    }
}

function loadEventListeners() {
    phoneNumberVerifierInput.addEventListener('change', (e) => {
        phoneNumberVerifier(e.target.value);
    })

    emailVerifierInput.addEventListener('change', (e) => {
        emailVerifier(e.target.value);
    })
}

loadEventListeners();