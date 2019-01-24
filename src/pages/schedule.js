import React from 'react'
import { graphql } from "gatsby";
import { Schedule } from 'components'

export default ({
  data: {
    allScheduleJson: { edges: schedule }
  }
}) => {
  return (
    <Schedule scheduleList={schedule} />
  );
};

export const query = graphql`
  query ScheduleQuery {
    allScheduleJson {
      edges {
        node {
          date
          matches{
            time
            team1
            logo1
            tricode1
            team2
            logo2
            tricode2
          }
          
        }
      }
    }
  }
`;