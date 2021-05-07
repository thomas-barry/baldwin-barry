import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import BlogLink from './BlogLink'
import BlogHeading from '../blog-heading/BlogHeading'

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
                gatsbyImageData(layout: FIXED, width: 150, height: 150)
              }
            }
            thumbnailAltText
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
            const blogPath = data.site.siteMetadata.blogPath
            return (
                <React.Fragment>
                    {data.allMdx.edges
                        .map(({ node }) => (
                            <div key={node.id} mb={2} className="bb-blog-index">
                                <BlogLink to={`/${blogPath}${node.fields.slug}`}>
                                    <div className="bb-thumbnail">
                                        {node.frontmatter.thumbnail ? (
                                            <div>
                                                <GatsbyImage image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData} alt={node.frontmatter.thumbnailAltText || ''} />
                                            </div>
                                        ) : <div className="thumbnail-placeholder" />}
                                    </div>
                                    <div>
                                        <BlogHeading title={node.frontmatter.title} date={node.frontmatter.date} />
                                        <p>{node.excerpt}</p>
                                    </div>
                                </BlogLink>
                            </div>
                        ))}
                </React.Fragment>
            )
        }}
    />
)

export default BlogIndex
