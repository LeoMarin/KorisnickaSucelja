import React from "react"
import styles from "./styles.module.css"

export default ({name, logo, children}) => {

  return (
    <>
      <div className={styles.team}>
        <div className={styles.teamName}>
          <img className={styles.logo}src={logo} alt={name}/>
          <span>{name}</span>
        </div>
        <div className={styles.players}>
          {children}
        </div>
        <div></div>
      </div>
    </>
  )
}