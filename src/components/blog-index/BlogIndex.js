import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e1e1e1;
  h2 { 
    margin: 0;
    font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 2px;
    color: #e0444d;
  }
`

export default () => {
  return (
    <StaticQuery
      query={blogIndexQuery}
      render={data => {
        const blogPath = data.site.siteMetadata.blogPath
        return (
          <div>
            {data.allMdx.edges.map(({ node }) => {
              return (
                <div key={node.id}>
                  <StyledLink to={`${blogPath}${node.fields.slug}`}>
                    <h2>
                      {node.frontmatter.title}{' '}
                      <span>
                        — {node.frontmatter.date}
                      </span>
                    </h2>
                    <p>{node.excerpt}</p>
                  </StyledLink>
                </div>
              )
            })}
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
            date(formatString: "DD MMMM, YYYY")
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