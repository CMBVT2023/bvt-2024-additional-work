// TODO: 
// Create forms
// // For Employees
// // For Business
// Create module for storing business
// Create module for storing employees
// // Create spinal tap module
// // Create capitalization module

// Create ui class

// Imports the object constructors from the objects.js file.
import * as objectsModule from "./objects.js"

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

    _redirectTeamFormPage() {
        window.location.href = "./business-form.html"
    }

    _toggleEmployeeForm() {
        this._employeeFormContainer.classList.toggle('hidden');
    }

    _loadEventListeners() {
        // Event listeners associated with toggling hidden containers.
        this._changeBusinessButton.addEventListener('click', this._toggleTeamSelection.bind(this));
        this._newEmployeeFormButton.addEventListener('click', this._toggleEmployeeForm.bind(this));

        // Event listeners associated with redirecting the webpage.
        this._newBusinessFormButton.addEventListener('click', this._redirectTeamFormPage.bind(this));
    }
}

let loadUI = new AppUI();