import React from "react"
import styles from "../styles.module.css"
import cn from "classnames";

export default ({ bracket }) => {

  return (
    <div className={styles.bracket}>
        <div className={cn(styles[bracket.class1], styles.topTeam)}>
            <img src={bracket.logo1} className={styles.logo} alt="logo" />
            <div className={styles.teamName}>{bracket.team1}</div>
            <div className={styles.tricode}>{bracket.tricode1}</div>
            <div className={styles.bracketScore}>{bracket.score1}</div>
        </div>
        <div className={styles[bracket.class2]}>
            <img src={bracket.logo2} className={styles.logo} alt="logo" />
            <div className={styles.teamName}>{bracket.team2}</div>
            <div className={styles.tricode}>{bracket.tricode2}</div>
            <div className={styles.bracketScore}>{bracket.score2}</div>
        </div>
    </div>
  )
}