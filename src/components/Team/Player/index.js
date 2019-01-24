import React from "react";
import styles from "./styles.module.css";

export default ({img, name, role}) => {

  return (
    <>
      <div className={styles.player}>
        <img className={styles.image} src={img} alt={name} />
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </>
  )
}