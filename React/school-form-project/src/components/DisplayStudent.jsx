import React from "react";
import DisplayValue from "./DisplayValue";
import styles from '../styles/DisplayStudent.module.css'

function DisplayStudent(props) {

    return (
        <ul className={styles.studentList}>
            {props.students.map((student, i) => (
                    <li key={'student_' + i} className={styles.studentItem}>
                        <DisplayValue
                            title='First Name'
                            variable={student.studentFirst}
                        />
                        <DisplayValue
                            title='Last Name'
                            variable={student.studentLast}
                        />
                        <DisplayValue
                            title='Age'
                            variable={student.studentAge}
                        />
                        <DisplayValue
                            title='Address'
                            variable={student.studentAddress}
                        />
                        <DisplayValue
                            title='Class Number'
                            variable={student.studentClassNumber}
                        />
                        <DisplayValue
                            title='Student ID'
                            variable={student.studentID}
                        />
                    </li>
                ))}

        </ul>
    )
}

export default DisplayStudent;