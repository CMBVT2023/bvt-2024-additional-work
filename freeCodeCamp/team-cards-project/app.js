// TODO: 
// Create forms
// // For Employees
// // For Business
// Create module for storing business
// Create module for storing employees
// // Create spinal tap module
// // Create capitalization module

// Create ui class


function employeeObject(name, position) {
    this.employeeName = name;
    this.employeePosition = position;
}

function businessObject(name, owner) {
    this.businessName = name;
    this.businessOwner = owner;
    this.businessEmployeeAmount = function(arr) {
        return arr.length;
    };
}

class AppUI {
    constructor() {
        this._currentBusiness;
        this._currentEmployees;

        this._loadHTMLElements();
        this._loadEventListeners();
    }

    // Loads all of the necessary HTML elements.
    _loadHTMLElements() {
        // Elements relating to the info-container
        this._businessNameDisplay = document.getElementById('business-name');
        this._employeeAmountDisplay = document.getElementById('employee-amount');
        this._ownerNameDisplay = document.getElementById('owner-name');
        this._changeBusinessButton = document.getElementById('change-business');

        // Elements relating to the team-form-container
        this._teamFormContainer = document.getElementById('team-form-container');
        this._newBusinessNameInput = document.getElementById('business-name-input');
        this._newBusinessOwnerInput = document.getElementById('business-owner-input');
        this._newBusinessButton = document.getElementById('create-new-business');

        // Elements relating to the team-selection container
        this._teamSelectionContainer = document.getElementById('team-selection');
        this._businessListElement = document.getElementById('business-list');
        this._newBusinessFormButton = document.getElementById('toggle-new-business-form');

        // Elements relating to the filter-container 
        this._employeePositionSelector = document.getElementById('employee-position-selector');
        this._employeeNameFilterInput = document.getElementById('employee-name-filter');

        // Elements relating to the employee-form-container
        this._employeeFormContainer = document.getElementById('employee-form-container');
        this._newEmployeeNameInput = document.getElementById('employee-name-input');
        this._newEmployeePositionInput = document.getElementById('employee-position-input');
        this._newEmployeeButton = document.getElementById('create-new-employee');

        // Elements relating to the display-container
        this._newEmployeeFormButton = document.getElementById('toggle-new-employee-form');
        this._employeeCardsElement = document.getElementById('employee-cards');
    };

    _toggleTeamSelection() {
        this._teamSelectionContainer.classList.toggle('hidden');
    };

    _toggleEmployeeForm() {
        this._employeeFormContainer.classList.toggle('hidden');
    }

    _loadEventListeners() {
        this._changeBusinessButton.addEventListener('click', this._toggleTeamSelection.bind(this));
        this._newEmployeeFormButton.addEventListener('click', this._toggleEmployeeForm.bind(this));
    }
}

let loadUI = new AppUI();