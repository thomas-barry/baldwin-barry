import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout/Layout'
import BlogHeading from '../blog-heading/BlogHeading'

export default function Template({ data }) {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date 
  return (
    <Layout>
      <Helmet title={`Baldwin.Barry- ${title}`} />
      <div className="blog-post">
        <BlogHeading date={date} title={title} />
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