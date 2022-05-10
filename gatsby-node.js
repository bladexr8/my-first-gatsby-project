const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve('./src/templates/blog-page.js');
  // get the blog posts
  const BlogPostQuery = await graphql(`
  {
    allMarkdownRemark(filter: { frontmatter: { type:
      { eq: "Blog" } } }) {
      nodes {
        fields {
          slug
        }
      }
    }
  }
  `);
  if (BlogPostQuery.errors) {
    reporter.panicOnBuild('Error while running graphQL query');
    return;
  }
  // render template for each blog post
  // defer: true renders pages when requested
  // not at build time
  BlogPostQuery.data.allMarkdownRemark.nodes.forEach(({ fields: { slug }}) => {
    createPage({
      path: `blog${slug}`,
      component: BlogPostTemplate,
      defer:true,
      context: {
        slug: slug
      }
    });
  });
}


/**
 * Add a slug field if the node is of the MarkdownRemark type. 
 * A slug is an address for a specific page on our site, so in 
 * the case of our blog page, we want every blog post to have 
 * a unique slug where it will render on the site.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode,
    basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
