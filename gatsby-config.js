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
        name: 'markdown-bio',
        path: `${__dirname}/MD/bio`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-postcss'
  ],
}