import React from "react"
import styles from "../styles.module.css"
import Team from "./Team"

export default ({ groupName, team1, team2, team3, team4 }) => {

  return (
    <div className={styles.group}>
        <div className={styles.groupName}>Group {groupName}</div>
        <div className={styles.teams}>
            <Team
                position={1}
                team={team1}
            />
            <Team
                position={2}
                team={team2}
            />
            <Team
                position={3}
                team={team3}
            />
            <Team
                position={4}
                team={team4}
            />
        </div>
    </div>
  )
}