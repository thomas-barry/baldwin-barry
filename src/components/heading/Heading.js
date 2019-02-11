import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h2`
  font-size: 28px;
  letter-spacing: 2px;
  color: #4a4949;
  margin: 2rem 0 1.5rem;
`

export default ({ children }) => <StyledHeading>{children}</StyledHeading>