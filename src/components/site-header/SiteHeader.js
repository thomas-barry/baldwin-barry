import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledOuterContainer = styled.div`
  background: #d71e28;
  margin-bottom: 1.45rem;
  border-bottom: 4px solid #fcc60a;
`

const StyledInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: .8rem 1.0875rem; 
`

const StyledHeader = styled.h1`
  font-size: 24px;
  margin: 0;
  letter-spacing: 2px;
  font-weight: normal;
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
