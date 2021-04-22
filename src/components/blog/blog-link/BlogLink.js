import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const BlogLink = ({ unfinished = false, ...props }) => {
  return (
    <Link css={css`
      color: #727272;
      text-decoration: none;
      h2 {
        color: ${unfinished ? 'gray' : '#A37414'};
      }
    `} {...props} />
  )
}

export default BlogLink
