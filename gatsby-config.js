require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: 'https://your.website',
    name: 'Peter Parker',
    role: 'Developer at Web Technologies',
    bio: 'My short bio that I will use to introduce myself'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx-bio',
        path: `${__dirname}/MDX/bio`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-postcss'
  ],
}