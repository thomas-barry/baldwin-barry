/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

const isDevelopment = 'development' === process.env.NODE_ENV

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog-post/BlogPost.js`)
  const pageTemplate = path.resolve(`src/components/page/Page.js`)

  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              date
              title
              unfinished 
            }
            fields {
              slug
              sourceName
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
      const sourceName = node.fields.sourceName
      if ('blog' === sourceName && (isDevelopment || !!!node.frontmatter.unfinished)) {
        createPage({
          path: `/${blogPath}${node.fields.slug}`,
          component: blogPostTemplate,
          context: { 
            id: node.id,
            slug: node.fields.slug,
          }
        })
      } else {
        createPage({
          path: `${node.fields.slug}`,
          component: pageTemplate,
          context: {
            id: node.id,
            slug: node.fields.slug,
          }
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({ node, name: `slug`, value: slug })
    if (parent.internal.type === 'File') {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName
      });
    }
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'), 
        path.resolve(__dirname, 'node_modules'), 
      ],
    },
  })
}