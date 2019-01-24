import React from "react";
import styles from "./styles.module.css"

export default ({ time, team1, logo1, team2, logo2, tricode1, tricode2 }) => (
    <div className={styles.item}>
        <div className={styles.first}>
            <div className={styles.time}>{time}</div>
            <div className={styles.minutes}>00</div>
        </div>
        <div className={styles.second}>
            <div className={styles.teamLeft}>
                <div className={styles.fullName}><span className={styles.span}>{team1}</span></div>
                <div className={styles.tricode}><span className={styles.span}>{tricode1}</span></div>
                <img src={logo1} className={styles.logo} alt="team1"/>
            </div>
            <div className={styles.vs}>vs</div>
            <div className={styles.teamRight}>
                <img src={logo2} className={styles.logo} alt="team2"/>
                <div className={styles.fullName}><span className={styles.span}>{team2}</span></div>
                <div className={styles.tricode}><span className={styles.span}>{tricode2}</span></div>
            </div>
        </div>
        <div>
        </div>
    </div>
);