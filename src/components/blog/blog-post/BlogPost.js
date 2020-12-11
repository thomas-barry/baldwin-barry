import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'
import Box from '@material-ui/core/Box'

import ThemedLayout from '../../layout/ThemedLayout'
import components from '../../mdx/components'
import BlogHeading from '../blog-heading/BlogHeading'

export default function Template ({ data: { mdx } }) {
  const { frontmatter } = mdx
  const { title, date } = frontmatter

  return (
    <ThemedLayout>
      <MDXProvider components={components}>
        <Helmet title={`Baldwin.Barry- ${title}`} />
        <BlogHeading date={date} title={title} />
        <Box fontWeight={400}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Box>
      </MDXProvider>
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
      body
    }
  }
`
