import React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  margin: 0 0 1.5rem 0;
`

const StyledHeading = styled.h2`
  margin: 0;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #bb0826;
`

const StyledDate = styled.div`
  margin: 0;
  color: gray;
  font-size: 14px;
`

export default ({ title, date }) => (
  <StyledContainer>
    <StyledHeading el="h2">{title}</StyledHeading>
    <StyledDate flex>{date}</StyledDate>
  </StyledContainer>
)
