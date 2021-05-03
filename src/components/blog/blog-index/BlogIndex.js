import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Box from '@material-ui/core/Box'

import BlogLink from './BlogLink'
import BlogHeading from '../blog-heading/BlogHeading'

const isDevelopment = process.env.NODE_ENV === 'development'

const blogIndexQuery = graphql`
  query {
    allMdx(
      filter: { fields: { sourceName: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields { 
            slug
          } 
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        blogPath
      }
    }
  }
`

const BlogIndex = () => (
    <StaticQuery
        query={blogIndexQuery}
        render={data => {
            console.log("DATA", data)
            const blogPath = data.site.siteMetadata.blogPath
            return (
                <React.Fragment>
                    {data.allMdx.edges
                        .map(({ node }) => (
                            <Box key={node.id} mb={2} className="bb-blog-index">
                                <BlogLink to={`/${blogPath}${node.fields.slug}`}>
                                    <Box>
                                        {node.frontmatter.thumbnail ? (
                                            <div>
                                                <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
                                            </div>
                                        ) : <div className="thumbnail-placeholder" />}
                                    </Box>
                                    <Box ml={3}>
                                        <BlogHeading title={node.frontmatter.title} date={node.frontmatter.date} />
                                        <p>{node.excerpt}</p>
                                    </Box>
                                </BlogLink>
                            </Box>
                        )
                        )}
                </React.Fragment>
            )
        }}
    />
)

export default BlogIndex
