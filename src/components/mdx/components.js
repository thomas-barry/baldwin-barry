import React from 'react'
import styled from '@emotion/styled'

const StyledAnchor = styled.a`
  color: #bb0826;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

// const Anchor = props => <a {...props} />

const components = {
  a: StyledAnchor,
}

export default components