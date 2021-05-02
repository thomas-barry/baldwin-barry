const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// const isDevelopment = process.env.NODE_ENV === 'development'

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('src/components/blog-post/BlogPost.js')
    const pageTemplate = path.resolve('src/components/page/Page.js')

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
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        const { blogPath } = result.data.site.siteMetadata
        result.data.allMdx.edges.forEach(({ node }) => {
            const { sourceName } = node.fields
            if (sourceName === 'blog') {
                createPage({
                    path: `/${blogPath}${node.fields.slug}`,
                    component: blogPostTemplate,
                    context: {
                        id: node.id,
                        slug: node.fields.slug,
                    },
                })
            } else {
                createPage({
                    path: `${node.fields.slug}`,
                    component: pageTemplate,
                    context: {
                        id: node.id,
                        slug: node.fields.slug,
                    },
                })
            }
        })
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'Mdx') {
        const parent = getNode(node.parent)
        const slug = createFilePath({ node, getNode, basePath: 'pages' })
        createNodeField({ node, name: 'slug', value: slug })
        if (parent.internal.type === 'File') {
            createNodeField({
                name: 'sourceName',
                node,
                value: parent.sourceInstanceName,
            })
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

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // Only update the `/app` page.
    if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
        page.matchPath = "/app/*"
        // Update the page.
        createPage(page)
    }
}
