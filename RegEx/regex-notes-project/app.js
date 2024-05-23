const phoneNumberVerifierDisplay = document.getElementById('phone-number-verifier-display');
const phoneNumberVerifierInput = document.getElementById('phone-number-verifier-input');

function phoneNumberVerifier(string) {
    let regexPattern = /(\+1[ -]?)?\(?(?<areaCode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/

    
    phoneNumberVerifierDisplay.innerHTML = regexPattern.test(string);
}

function loadEventListeners() {
    phoneNumberVerifierInput.addEventListener('change', (e) => {
        phoneNumberVerifier(e.target.value);
    })
}

loadEventListeners();