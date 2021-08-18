import React from "react";
import styles from "./Button.module.css"

export function Button ({value, onClick}) {
    return <button className={styles.btn} value={value} onClick={onClick}>{value}</button>
}



