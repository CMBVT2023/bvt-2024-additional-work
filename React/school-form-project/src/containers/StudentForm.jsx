import React from 'react';
import UserInput from '../components/UserInput';
import DisplayValue from "../components/DisplayValue";
import { StudentObj } from '../modules/StudentObject';
import styles from '../styles/StudentForm.module.css';
import { StudentStorage } from '../modules/StudentStorage';

// First name
// Last name
// Age
// Address
// Homeroom class number
// Student ID

function StudentForm({ triggerUpdate }) {
    const [ firstName, setFirstName ] = React.useState('');
    const [ lastName, setLastName ] = React.useState('');
    const [ age, setAge ] = React.useState('');
    const [ address, setAddress ] = React.useState('');
    const [ classNumber, setClassNumber ] = React.useState('');
    const [ studentID, setStudentID ] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        let newStudentObj = new StudentObj(firstName, 
                                            lastName, 
                                            age, 
                                            address, 
                                            classNumber, 
                                            studentID);

        if (StudentStorage.checkStudent(newStudentObj.studentID)) {
            StudentStorage.addNewStudent(newStudentObj);
            triggerUpdate();
        } else {
            alert('Student ID already assigned.')
        }
    }

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setAddress('');
        setClassNumber('');
        setStudentID('');
    }

    return (
        <div id={styles.formContainer}>
            <form 
             className={styles.userInputsDiv}
             onSubmit={handleSubmit} >
                <UserInput
                    title='First Name'
                    setVariable={setFirstName}
                    variable={firstName}
                    boxType={'text'}
                    />
                <UserInput
                    title='Last Name' 
                    setVariable={setLastName} 
                    variable={lastName}
                    boxType={'text'}
                    />
                <UserInput 
                    title='Age' 
                    setVariable={setAge} 
                    variable={age}
                    boxType={'number'}
                    />
                <UserInput 
                    title='Address' 
                    setVariable={setAddress} 
                    variable={address}
                    boxType={'text'}
                    />
                <UserInput 
                    title='Class Number' 
                    setVariable={setClassNumber} 
                    variable={classNumber}
                    boxType={'number'}
                    />
                <UserInput 
                    title='Student ID' 
                    setVariable={setStudentID}
                    variable={studentID}
                    boxType={'number'}
                    />

                <div>
                    <input type='submit'/>
                    <input type='button' value={'Clear All'} onClick={clearInputs}/>
                </div>
            </form>

            <div className={styles.valueDisplayDiv}>
                <DisplayValue 
                    title='First Name'
                    variable={firstName}
                    />
                <DisplayValue
                    title='Last Name'
                    variable={lastName}
                    />
                <DisplayValue 
                    title='Age' 
                    variable={age}
                    />
                <DisplayValue 
                    title='Address' 
                    variable={address}
                    />
                <DisplayValue 
                    title='Class Number' 
                    variable={classNumber}
                    />
                <DisplayValue 
                    title='Student ID' 
                    variable={studentID}
                    />
            </div>
        </div>
    )
}

export default StudentForm;