// Imports necessary modules.
import * as objectsModule from "./objects.js"
import * as storageModule from "./storage.js"
import * as miscModule from "./misc.js"

// Loads necessary HTML Elements from the webpage
const newBusinessNameInput = document.getElementById('business-name-input');
const newBusinessOwnerInput = document.getElementById('business-owner-input');
const teamForm = document.getElementById('team-form');
const teamFormReturnButton = document.getElementById('team-form-return');
const teamListElement = document.getElementById('team-list-container');

// Upon a confirmation, redirects user's back to the initial web url.
function redirectMainPage() {
    window.location.href = "./index.html"
}

// Clears the various user inputs.
function clearSelection() {
    newBusinessNameInput.value = '';
    newBusinessOwnerInput.value = '';
}

function loadTeamEventListeners() {
    let headerButtons = teamListElement.querySelectorAll('h4')

    for (let index = 0; index < headerButtons.length; index++) {
        if (headerButtons[index].innerHTML === 'Edit') {
            headerButtons[index].addEventListener('click', () => {
                editBusiness(headerButtons[index].parentElement.id)
            }, {once:true})
        } else {
            headerButtons[index].addEventListener('click', () => {
                removeBusiness(headerButtons[index].parentElement.id)
            }, {once:true})
        }
    }
}

function loadTeamList() {
    let list = storageModule.businessStorage.getBusinessArray();

    teamListElement.innerHTML = ``;
    for (let index = 0; index < list.length; index++) {
        teamListElement.innerHTML += `<div id='${index}'>
            <h3>Business: ${list[index].businessName}</h3>
            <h3>Employee Count: ${list[index].employeeAmount}</h3>
            <h3>Owner: ${list[index].businessOwner}</h3>
            <h4 class="header-button">Edit</h4>
            <h4 class="header-button">Remove</h4>
        </div>`
    }

    loadTeamEventListeners();
}

// Checks that the newly created business does not conflict with a previously created business.
function confirmNewBusiness(businessObj) {
    let businessArr = storageModule.businessStorage.getBusinessArray();

    for (const obj of businessArr) {
        if (obj.businessID === businessObj.businessID) {
            return false;
        }
    }

    storageModule.businessStorage.addNewBusiness(businessObj);
    return true;
}

function createNewBusiness() {
    let businessName = miscModule.capitalizeName(newBusinessNameInput.value);
    let businessOwner = miscModule.capitalizeName(newBusinessOwnerInput.value);

    let businessID = miscModule.spinalTapConversion(businessName);
    
    let newBusiness = new objectsModule.businessObject(businessID, businessName, businessOwner);
    
    
    let result = confirmNewBusiness(newBusiness);
    if (result) {
        clearSelection();
        loadTeamList();
    } else {
        confirm ('Error, business already exist.');
    }
}

function removeBusiness(index) {
    console.log('remove:', index)
}

function editBusiness(index) {
    console.log(index)
}

function loadEventListeners() {
    teamFormReturnButton.addEventListener('click', redirectMainPage);

    teamForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createNewBusiness();
    });
}

loadEventListeners();
loadTeamList();