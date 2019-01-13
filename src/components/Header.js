import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledOuterContainer = styled.div`
  background: #bb0826;
  margin-bottom: 1.45rem;
`

const StyledInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem; 
`

const StyledHeader = styled.h1`
  margin: 0;
  letter-spacing: 3px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledOuterContainer>
    <StyledInnerContainer>
      <StyledHeader>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </StyledHeader>
    </StyledInnerContainer>
  </StyledOuterContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
