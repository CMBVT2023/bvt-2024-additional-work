import React from "react";
import StudentForm from "./StudentForm";

// ToDo:
// Create a module to allow easier creation of new inputs and their display,
// // Instead of having hard coded user inputs and display inputs, create a module with an array containing all of the required inputs
// // and map through said array and create the respective inputs and their displays.

// Add a way to save to localStore by submitting the form.
// Display all saved students in localStorage to their own display container.
// Add more user inputs.

// Design the UI.

function InfoDisplay() {
    return (
        <StudentForm />
    )
}

export default InfoDisplay;