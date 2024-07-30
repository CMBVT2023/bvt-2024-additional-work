import React from "react";
import styles from '../styles/DisplayValue.module.css'

function DisplayValue(props) {
    return (
        <div className={styles.divStyle}>
            <h3 className={styles.titleStyle}>{props.title}:</h3>
            <p className={styles.variableStyle}>{props.variable}</p>
        </div>
    )
}

export default DisplayValue;