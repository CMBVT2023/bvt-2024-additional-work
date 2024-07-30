import React from "react";
import StudentForm from "./StudentForm";
import DisplayStudent from "../components/DisplayStudent";
import { StudentStorage } from '../modules/StudentStorage';
import styles from '../styles/InfoDisplay.module.css'

function InfoDisplay() {
    const [ studentList, setStudentList ] = React.useState(StudentStorage.getStudentList);

    const updateList = () => {
        setStudentList(StudentStorage.getStudentList);
    }

    const removeStudent = (id) => {
        StudentStorage.removeStudent(id);
        updateList();
    }

    return (
        <div id={styles.mainContainer}>
            <StudentForm triggerUpdate={updateList}/>
            <div className={styles.studentsDisplay}>
                <h1 id={styles.titleStyle}>Students:</h1>
                <DisplayStudent students={studentList} remove={removeStudent}/>    
            </div>
        </div>
    )
}

export default InfoDisplay;