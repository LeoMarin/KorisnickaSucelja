const path = require('path')

module.exports = {
  siteMetadata: {
    title: "World Championship"
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "content"
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: "1200px",
              linkImagesToOriginal: false,
              backgroundColor: "transparent"
            }
          }
        ]
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`)
      }
    },
    "gatsby-plugin-root-import",
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        static: path.join(__dirname, 'static')
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    }
  ]
};
