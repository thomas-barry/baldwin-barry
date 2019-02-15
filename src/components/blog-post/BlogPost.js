import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from '../layout/Layout'
import BlogHeading from '../blog-heading/BlogHeading'

export default function Template({ data: { mdx } }) {
  const { frontmatter } = mdx 
  const { title, date } = frontmatter 
  return (
    <Layout>
      <Helmet title={`Baldwin.Barry- ${title}`} />
      <BlogHeading date={date} title={title} />
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogPostQuery($id: String) {
  mdx(id: { eq: $id }) {
    id
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
    }
    code {
      body
    }
  }
}
`