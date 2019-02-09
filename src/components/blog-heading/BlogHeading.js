import React from 'react'
import Flexbox from 'flexbox-react'
import styled from 'styled-components'
import { useMedia } from 'react-use-media'

const StyledContainer = styled.div`
  margin: 2.5rem 0;
`

const StyledHeading = styled.h2`
  margin: 0;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #00698c;
`

const StyledDate = styled.div`
  margin: 0;
  color: gray;
  text-align: right;
  padding-right: 1em;
`

export default ({ title, date }) => {
  const narrow = useMedia('(max-width: 599px)')
  return (
    <StyledContainer>
      <Flexbox flexDirection={narrow ? "column" : "row"} alignItems="center">
        <Flexbox flex="1 1 auto">
          <StyledHeading el="h2">{title}</StyledHeading>
        </Flexbox>
        <StyledDate flex>{date}</StyledDate>
      </Flexbox>
    </StyledContainer>
  )
}