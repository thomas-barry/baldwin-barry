import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={blogIndexQuery}
      render={data => {
        const blogPath = data.site.siteMetadata.blogPath
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <div key={node.id}>
                  <Link to={`${blogPath}${node.fields.slug}`}>
                    <h3>
                      {node.frontmatter.title}{' '}
                      <span>
                        — {node.frontmatter.date}
                      </span>
                    </h3>
                    <p>{node.excerpt}</p>
                  </Link>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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