import React from 'react'
import { graphql } from "gatsby";
import { Router } from "@reach/router"
import { Groups, Knockouts } from "components"

export default ({
  data: {
    allGroupsJson: { edges: groups },
    allKnockoutsJson: { edges: knockouts }
  }
}) => {
  return (
    <Router>
    <Groups path="/standings/groups" groups={groups} />
    <Knockouts path="/standings/knockouts" knockouts={knockouts[0].node}/>
  </Router>
  );
};

export const query = graphql`
  query StandingsQuery {
    allGroupsJson {
      edges {
        node {   
          group
          team1{
            name
            tricode
            logo
            score        
          }
          team2{
            name
            tricode
            logo
            score        
          }
          team3{
            name
            tricode
            logo
            score        
          }
          team4{
            name
            tricode
            logo
            score    
          }      	
        }
      }
    }
    allKnockoutsJson {
      edges {
        node {  
          quaters1 {
            team1
            tricode1
            logo1
            score1
            class1
            team2
            tricode2
            logo2
            score2
            class2
          }
          quaters2 {
            team1
            tricode1
            logo1
            score1
            class1
            team2
            tricode2
            logo2
            score2
            class2
          }
          quaters3 {
            team1
            tricode1
            logo1
            score1
            class1
            team2
            tricode2
            logo2
            score2
            class2
          }
          quaters4 {
            team1
            tricode1
            logo1
            score1
            class1
            team2
            tricode2
            logo2
            score2
            class2
          }
          semis1 {
            team1
            tricode1
            logo1
            score1
            class1
            team2
            tricode2
            logo2
            score2
            class2
          }
          semis2 {
            team1
            tricode1
            logo1
            score1
            class1
            team2
            tricode2
            logo2
            score2
            class2
          }
          finals {
            team1
            tricode1
            logo1
            score1
            class1
            team2
            tricode2
            logo2
            score2
            class2
          }
        }
      }
    }
  }
`;