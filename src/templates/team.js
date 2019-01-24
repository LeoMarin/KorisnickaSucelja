import React from "react";
import { graphql, Link } from "gatsby";
import rehypeReact from "rehype-react"
import { Team, Player } from "components"
import styles from "./styles.module.css";
import x from "static/x.png"

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "team": Team, "player": Player },
  }).Compiler
  return (
    <>
      <Link to="/teams">
        <img className={styles.x} src={x} alt="x" />
      </Link>
      {
        renderAst(post.htmlAst)
      }
    </>
  );
};

export const query = graphql`
  query TeamRosterQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        slug
        title
      }
    }
  }
`;
