import React from 'react'
import { graphql } from "gatsby";
import { TeamList } from "components"

export default ({
  data: {
    allMarkdownRemark: { edges: teams } // Rename edges to posts
  }
}) => {
  return (
    <>
      <TeamList teams={teams} />
    </>
  );
};

export const query = graphql`
  query TeamsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___name, order: ASC }
      filter: { frontmatter: { team: { eq: "1" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            league
            slug
            team_logo {
              publicURL
            } 
            league_logo {
              publicURL
            } 
          }
        }
      }
    }
  }
`;