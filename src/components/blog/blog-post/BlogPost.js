import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'
import Box from '@material-ui/core/Box'
import ShareIcon from '@material-ui/icons/Share'
import IconButton from '@material-ui/core/IconButton'

import Layout from '../../layout/Layout'
import components from '../../mdx/components'
import BlogHeading from '../blog-heading/BlogHeading'

export default function Template ({ data: { mdx } }) {
    const { frontmatter } = mdx
    const { title, date } = frontmatter

    const sharePost = async () => {
        if (navigator.share) {
            await navigator.share({
                title,
                url: window.location.href,
            })
            alert('Shared')
        } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(window.location.href)
            alert('Copied to clipboard')
        }
    }

    return (
        <Layout>
            <div className="bb-blog-post">
                <MDXProvider components={components}>
                    <Helmet title={`Baldwin.Barry- ${title}`} />
                    <BlogHeading title={title} date={date} />
                    <Box fontWeight={400} mt={2}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </Box>
                    <IconButton
                        disableRipple
                        disableFocusRipple
                        onClick={sharePost}>
                        <ShareIcon />
                    </IconButton>
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
