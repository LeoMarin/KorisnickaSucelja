import React from "react"
import styles from "../styles.module.css"

export default ({ position, team }) => {
  return (
    <div className={styles.team}>
      <div className={styles.position}>{position}</div>
      <img className={styles.logo} src={team.logo} alt="logo" />
      <div className={styles.teamStats}>
          <div className={styles.name}>{team.name}</div>
          <div className={styles.tricodeGrp}>{team.tricode}</div>
          <div className={styles.score}>{team.score}</div>
      </div>
    </div>
  )
}