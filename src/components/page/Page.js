import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from '../layout/Layout'

export default function Template({ data: { mdx } }) {
  const { frontmatter } = mdx 
  const { title } = frontmatter 
  return (
    <Layout>
      <Helmet title={`Baldwin.Barry- ${title}`} />
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
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