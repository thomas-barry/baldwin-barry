import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import ThemedLayout from '../layout/ThemedLayout'

export default function Template({ data: { mdx } }) {
  const { frontmatter } = mdx
  const { title } = frontmatter
  return (
    <ThemedLayout>
      <Helmet title={`Baldwin.Barry- ${title}`} />
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </ThemedLayout>
  )
}

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
