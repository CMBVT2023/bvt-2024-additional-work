// Imports necessary modules.
import * as objectsModule from "./objects.js"
import * as storageModule from "./storage.js"
import * as miscModule from "./misc.js"

const newBusinessNameInput = document.getElementById('business-name-input');
const newBusinessOwnerInput = document.getElementById('business-owner-input');
const teamForm = document.getElementById('team-form');
const teamFormReturnButton = document.getElementById('team-form-return');

function redirectMainPage() {
    window.location.href = "./index.html"
}

function confirmNewBusiness(businessObj) {
    let businessArr = storageModule.businessStorage.getBusinessArray();

    for (const obj of businessArr) {
        if (obj.businessID === businessObj.businessID) {
            return false;
        }
    }

    return true;
}

function createNewBusiness() {
    let businessName = miscModule.capitalizeName(newBusinessNameInput.value);
    let businessOwner = miscModule.capitalizeName(newBusinessOwnerInput.value);

    let businessID = miscModule.spinalTapConversion(businessName);
    
    let newBusiness = new objectsModule.businessObject(businessID, businessName, businessOwner);
    
    
    console.log(newBusiness);
}

function loadEventListeners() {
    teamFormReturnButton.addEventListener('click', redirectMainPage);

    teamForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createNewBusiness();
    });
}

loadEventListeners();