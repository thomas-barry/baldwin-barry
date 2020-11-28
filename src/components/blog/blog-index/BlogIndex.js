import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import BlogLink from '../blog-link/BlogLink'

const isDevelopment = 'development' === process.env.NODE_ENV

const StyledBlogLink = styled(BlogLink)`
  h2 { 
    margin: 0;
    font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 2px;
  }
`

const StyledDate = styled.div`
  font-size: 14px;
`

export default () => {
  return (
    <StaticQuery
      query={blogIndexQuery}
      render={data => {
        const blogPath = data.site.siteMetadata.blogPath
        return (
          <div>
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
          </div>
        )
      }}
    />
  )
}

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