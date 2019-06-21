import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import useScrollPosition from '../hooks/use-scroll-position'

const DOWN = 0
const UP = 1

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
  padding: ${({ small }) => (small ? '0.2rem 1rem' : '0.8rem 1rem')};
  transition: padding 0.25s ease;
`

const StyledHeader = styled.h1`
  margin: 0;
  letter-spacing: 2px;
  font-weight: normal;
  color: #dadada;
  font-size: ${({ small }) => (small ? '16px' : '24px')};
  transition: font-size 0.25s ease;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  const { y: scrollTop } = useScrollPosition()
  const [lastScrollTop, setLastScrollTop] = useState(scrollTop)
  const [lastDirection, setLastDirection] = useState(DOWN)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    setLastScrollTop(scrollTop)
    const direction = scrollTop > lastScrollTop ? DOWN : UP
    setDistance(scrollTop - lastScrollTop)
    if (direction !== lastDirection) {
      setLastDirection(scrollTop > lastScrollTop ? DOWN : UP)
      setDistance(0)
    }
  }, [scrollTop])

  const small = scrollTop > 80

  console.log('Distance', distance)

  return (
    <StyledOuterContainer>
      <StyledInnerContainer small={small}>
        <StyledHeader small={small}>
          <StyledLink to="/">
            {siteTitle} {lastDirection ? 'UP' : 'DOWN'}
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
