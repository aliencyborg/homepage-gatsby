const path = require('path')

module.exports = {
  siteMetadata: {
    title: `AlienCyborg`,
    description: `AlienCyborg is a scrappy team of website builders with a futuristic vision of
      amazing online experiences. Need a website built or repaired? Say hello@aliencyb.org.`,
    author: `admin@aliencyb.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AlienCyborg`,
        short_name: `AlienCyborg`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#6D28D9`,
        display: `minimal-ui`,
        icon: `src/images/logo-v2.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
