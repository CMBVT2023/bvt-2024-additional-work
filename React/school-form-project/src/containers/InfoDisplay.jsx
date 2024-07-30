import React from "react";
import StudentForm from "./StudentForm";
import DisplayStudent from "../components/DisplayStudent";
import { StudentStorage } from '../modules/StudentStorage';
import styles from '../styles/InfoDisplay.module.css'

// ToDo:
// Add a way to save to localStore by submitting the form.
// Display all saved students in localStorage to their own display container.
// Add more user inputs.

// Design the UI.

function InfoDisplay() {
    const [ studentList, setStudentList ] = React.useState(StudentStorage.getStudentList);

    const updateList = () => {
        setStudentList(StudentStorage.getStudentList);
        console.log(studentList)
    }

    return (
        <div id={styles.mainContainer}>
            <StudentForm triggerUpdate={updateList}/>
            <div className={styles.studentsDisplay}>
                <DisplayStudent students={studentList}/>    
            </div>
        </div>
    )
}

export default InfoDisplay;