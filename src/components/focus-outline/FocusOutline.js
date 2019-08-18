import React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledFocusable = styled.div`
  font-size: 24px;
  outline: none;
`

const StyledLink = styled.a`
  font-size: 24px;
  outline: none;
`

const StyledHeader = styled.h1`
  color: black;
  outline: none;
`

const FocusOutline = () => 
  <StyledContainer>
    <StyledHeader tabIndex="0">This is a header</StyledHeader>
    <StyledFocusable tabIndex="0">Accepts Focus</StyledFocusable>
    <StyledLink href="http://192.168.2.23:8000/blog/20190723-ios-outline/">NYTimes</StyledLink>
    <div>
      <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
      <label for="subscribeNews">Subscribe to newsletter?</label>
    </div>
  </StyledContainer>

export default FocusOutline