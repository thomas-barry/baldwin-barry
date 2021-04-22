import React from 'react'
import styled from '@emotion/styled'

const StyledHeading = styled.h2`
  font-size: 28px;
  letter-spacing: 2px;
  color: #BC8034;
  margin: 2rem 0 1.5rem;
`

export default ({ children }) => <StyledHeading>{children}</StyledHeading>
