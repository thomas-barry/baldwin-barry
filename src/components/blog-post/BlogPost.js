import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import ThemedLayout from '../layout/ThemedLayout'
import BlogHeading from '../blog-heading/BlogHeading'

export default function Template({ data: { mdx } }) {
  const { frontmatter } = mdx
  const { title, date } = frontmatter
  return (
    <ThemedLayout>
      <Helmet title={`Baldwin.Barry- ${title}`} />
      <BlogHeading date={date} title={title} />
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </ThemedLayout>
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
