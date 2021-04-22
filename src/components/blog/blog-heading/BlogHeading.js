import React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  margin: 0 0 0 0;
`

const StyledHeading = styled.h2`
  margin: 0;
  letter-spacing: 2px;
  font-weight: 600;
  color: #A37414;
`

const StyledDate = styled.div`
  margin: 0;
  color: gray;
  font-size: 14px;
  padding: 4px 0 8px 0;
`

export default ({ title, date }) => (
  <StyledContainer>
    <StyledHeading el="h2">{title}</StyledHeading>
    <StyledDate flex>{date}</StyledDate>
  </StyledContainer>
)
