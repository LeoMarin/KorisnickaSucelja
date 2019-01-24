import React from "react"
import styles from "../styles.module.css"
import { Link } from "gatsby"
import {Helmet} from "react-helmet"
import Bracket from "./Bracket"
import cn from "classnames";

export default ({ knockouts }) => {
  return (
    <>
      <Helmet>
        <title>Worlds - Standings</title>
      </Helmet>
      <div className={styles.headder}></div>
      <div className={cn(styles.nav, styles.knav)}>
        <span className={styles.stage}>STAGE:</span>
        <Link to="standings/groups" className={styles.inactive}> GROUPS </Link>
        <Link to="standings/knockouts" className={styles.active} > KNOCKOUTS </Link>
      </div>
      <div className={styles.main}>
      <div className={styles.roundNames}>
        <div>Quarterfinals</div>
        <div>Semifinals</div>
        <div>Finals</div>
      </div>

      <div className={styles.knockouts}>
        <div className={styles.quater}>
          <div className={styles.linesQuater}>
            <div></div><div></div>
          </div>
          <div className={styles.bracketHelper}>
            <Bracket bracket={knockouts.quaters1}/>
            <Bracket bracket={knockouts.quaters2}/>
          </div>
          <div className={styles.bracketHelper}>
            <Bracket bracket={knockouts.quaters3}/>
            <Bracket bracket={knockouts.quaters4}/>
          </div>
        </div>
        <div className={styles.semi}>
          <div className={styles.linesSemi}></div>
          <Bracket bracket={knockouts.semis2}/>
          <Bracket bracket={knockouts.semis2}/>
        </div>
        <div className={styles.finals}>
          <div className={styles.linesFinals}></div>
          <Bracket bracket={knockouts.finals}/>
        </div>
      </div>

      </div>
    </>
  )
}