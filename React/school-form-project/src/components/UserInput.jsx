import React from "react";
import styles from "../styles/UserInput.module.css"

function UserInput(props) {

    const handleChange = (e) => {
        props.setVariable(e.target.value)
    };

    return (
        <div className={styles.divStyle}>
            <label className={styles.labelStyle} htmlFor={props.title}>{props.title}:</label>
            <input
                id={props.title}
                onChange={handleChange}
                value={props.variable}
                type={props.boxType}
                required={true}
                />
        </div>
    )
}

export default UserInput;