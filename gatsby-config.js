odule.exports = {
  siteMetadata: {
    title: "Kanvas Hair Studio",
    author: "ujely",
    description: "Kanvas Hair Studio - Orange County"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: 'kanvashairstudio.com',
        background_color: '#f5f5f5',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-172015678-1',
      },
    },
  ],
}
