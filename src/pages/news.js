import React from 'react'
import { graphql } from "gatsby";
import { NewsFeed } from "components"

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <NewsFeed posts={posts} />
  );
};


export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___id, order: ASC }
      filter: { frontmatter: { title: { ne: "" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            image {
              publicURL
            } 
          }
        }
      }
    }
  }
`;