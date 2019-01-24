const path = require("path");


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const newsTemplate = path.resolve(`src/templates/news-post.js`);
  const teamTemplate = path.resolve(`src/templates/team.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              team
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, team } = node.frontmatter;
      if(team==="1"){
        createPage({
          path: "/teams/" + slug,
          component: teamTemplate,
          context: {
            slug
          }
        });
      }
      else {
        createPage({
          path: "/news/" + slug,
          component: newsTemplate,
          context: {
            slug
          }
        });
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "./src")]
    }
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
    createPage(page)
  }
  if (page.path.match(/^\/standings/)) {
    page.matchPath = "/standings/*"
    createPage(page)
  }
}