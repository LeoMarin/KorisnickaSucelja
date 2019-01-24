import React from "react";
import styles from "./styles.module.css";

export default ({ number, label }) => {
    if(number < 10)
        number = "0" + number;
    if (label !== "SECONDS"){
        return(
            <>
                <div>
                    <p className={styles.number}>{number}</p>
                    <p className={styles.label}>{label}</p>
                </div>
                <div>
                <p className={styles.number}>:</p>
                </div>
            </>
        )
    }
    return(
        <div>
            <p className={styles.number}>{number}</p>
            <p className={styles.label}>{label}</p>
        </div>
    )
}