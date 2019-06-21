import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// import useScrollPosition from '../hooks/use-scroll-position'

const StyledOuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #bb0826;
  border-bottom: 3px solid #fcc60a;
  z-index: 1;
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
  color: #dadada;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  // const { y: scrollTop } = useScrollPosition()
  return (
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
