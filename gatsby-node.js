/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog-post/BlogPost.js`)

  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
      site {
        siteMetadata { 
          blogPath
        }
      }
    }`
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const blogPath = result.data.site.siteMetadata.blogPath
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/${blogPath}${node.fields.slug}`,
        component: blogPostTemplate,
        context: { 
          id: node.id,
          slug: node.fields.slug,
        }
      });
    });
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: `slug`, value: slug })
  }
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({ node, name: `slug`, value: slug })
  }
}