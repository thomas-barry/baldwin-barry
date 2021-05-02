import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'
import Box from '@material-ui/core/Box'

import Layout from '../../layout/Layout'
import components from '../../mdx/components'
import BlogHeading from '../blog-heading/BlogHeading'

export default function Template ({ data: { mdx } }) {
    const { frontmatter } = mdx
    const { title, date } = frontmatter

    return (
        <Layout>
            <div className="bb-blog-post">
                <MDXProvider components={components}>
                    <Helmet title={`Baldwin.Barry- ${title}`} />
                    <BlogHeading title={title} date={date} />
                    <Box fontWeight={400} mt={2}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </Box>
                </MDXProvider>
            </div>
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
      body
    }
  }
`
