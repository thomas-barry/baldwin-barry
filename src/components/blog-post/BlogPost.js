import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout/Layout'
import Heading from '../heading/Heading'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet title={`Baldwin.Barry- ${post.frontmatter.title}`} />
      <div className="blog-post">
        <Heading>{post.frontmatter.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`