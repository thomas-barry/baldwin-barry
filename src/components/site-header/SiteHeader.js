import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import useScrollPosition from '../hooks/use-scroll-position'

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
  padding: 0.8rem 1.0875rem;
  padding: ${({ collapsed }) => (collapsed ? '0.2rem 1rem' : '0.8rem 1rem')};
  transition: padding 0.25s ease;
`

const StyledHeader = styled.h1`
  margin: 0;
  letter-spacing: 2px;
  font-weight: normal;
  color: #dadada;
  font-size: ${({ collapsed }) => (collapsed ? '16px' : '24px')};
  transition: font-size 0.25s ease;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  const { y: scrollTop } = useScrollPosition()
  const [lastScrollTop, setLastScrollTop] = useState(scrollTop)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    setCollapsed(scrollTop > lastScrollTop)
    setLastScrollTop(scrollTop)
  }, [scrollTop])

  return (
    <StyledOuterContainer>
      <StyledInnerContainer collapsed={collapsed}>
        <StyledHeader collapsed={collapsed}>
          <StyledLink to="/">{siteTitle}</StyledLink>
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
