import React from 'react';
import UserInput from '../components/UserInput';

// First name
// Last name
// Age
// Address
// Homeroom class number
// Student ID

function FormInputs() {
    const [ firstName, setFirstName ] = React.useState('');
    const [ lastName, setLastName ] = React.useState('');
    const [ age, setAge ] = React.useState('');
    const [ address, setAddress ] = React.useState('');
    const [ classNumber, setClassNumber ] = React.useState('');
    const [ studentID, setStudentID ] = React.useState('');

    return (
        <div>
            <UserInput title='First Name'/>
            <UserInput title='Last Name'/>
            <UserInput title='Age'/>
            <UserInput title='Address'/>
            <UserInput title='Class Number'/>
            <UserInput title='Student ID'/>
        </div>
    )
}

export default FormInputs;