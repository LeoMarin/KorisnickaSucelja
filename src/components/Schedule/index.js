import React from "react";
import styles from "./styles.module.css";
import ScheduleItem from "./ScheduleItem";
import {Helmet} from "react-helmet";

export default ({ scheduleList }) => {

    const shcedule = scheduleList.map(element => {
        const scheduleElement = element.node
    return (   
      <div key={scheduleElement.date}>
        <div className={styles.date}>{scheduleElement.date}</div>
        <div className={styles.schItem}>
            {scheduleElement.matches.map(match =>{
                return (
                    <ScheduleItem 
                        key={match.time}
                        time={match.time}
                        team1={match.team1}
                        logo1={match.logo1}
                        team2={match.team2}
                        logo2={match.logo2}
                        tricode1={match.tricode1}
                        tricode2={match.tricode2}
                    />
                )
            })}
        </div>
      </div>
    )
  });

  return (
    <>
        <Helmet>
            <title>Worlds - Schedule</title>
        </Helmet>
        <div>{shcedule}</div>
    </>
  );
};
