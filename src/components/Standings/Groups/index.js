import React from "react"
import styles from "../styles.module.css"
import { Link } from "gatsby"
import Group from "./Group"
import {Helmet} from "react-helmet"

export default ({ groups }) => {
  const groupHtml = groups.map(groupNode => {
    const group = groupNode.node
    return(
      <Group 
        key={group.group}
        groupName={group.group}
        team1={group.team1}
        team2={group.team2}
        team3={group.team3}
        team4={group.team4}  
      />
    )
  })
  return (
    <>        
      <Helmet>
        <title>Worlds - Standings</title>
      </Helmet>
      <div className={styles.nav}>
        <span className={styles.stage}>STAGE:</span>
        <Link to="standings/groups" className={styles.active} > GROUPS </Link>
        <Link to="standings/knockouts" className={styles.inactive}> KNOCKOUTS </Link>
      </div>
      <div className={styles.groups}>{groupHtml}</div>
    </>
  )
}