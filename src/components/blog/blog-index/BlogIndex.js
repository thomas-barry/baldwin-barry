import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import BlogLink from '../blog-link/BlogLink'

const isDevelopment = process.env.NODE_ENV === 'development'

const StyledBlogLink = styled(BlogLink)`
  h2 { 
    margin: 0;
    font-weight: 600;
    letter-spacing: 2px;
  }
`

const StyledDate = styled.div`
  padding: 4px 0 8px 0;
  font-size: 14px;
`

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
            unfinished 
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
export default () => {
  return (
    <StaticQuery
      query={blogIndexQuery}
      render={data => {
        const blogPath = data.site.siteMetadata.blogPath
        return (
          <React.Fragment>
            {data.allMdx.edges
              .filter(({ node }) => (isDevelopment || !node.frontmatter.unfinished))
              .map(({ node }) => (
                <div key={node.id}>
                  <StyledBlogLink unfinished={node.frontmatter.unfinished} to={`/${blogPath}${node.fields.slug}`}>
                    <h2>
                      {node.frontmatter.title}{' '}
                    </h2>
                    <StyledDate>{node.frontmatter.date}</StyledDate>
                    <p>{node.excerpt}</p>
                  </StyledBlogLink>
                </div>
              )
              )}
          </React.Fragment>
        )
      }}
    />
  )
}
