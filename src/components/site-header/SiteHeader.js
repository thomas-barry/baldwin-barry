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
  const [lastLocation, setLastLocation] = useState(window.location)
  const [lastScrollTop, setLastScrollTop] = useState(scrollTop)
  const [lastDirection, setLastDirection] = useState(DOWN)
  const [delta, setDelta] = useState(lastScrollTop)

  useEffect(() => {
    const direction =
      scrollTop !== lastScrollTop
        ? scrollTop > lastScrollTop
          ? DOWN
          : UP
        : lastDirection

    if (lastLocation !== window.location) {
      console.log('Location changed')
      setDelta(0)
      setLastDirection(DOWN)
      setLastLocation(window.location)
    } else {
      if (direction !== lastDirection) {
        setLastDirection(direction)
        setDelta(0)
      } else {
        setDelta(delta + Math.abs(scrollTop - lastScrollTop))
      }
    }

    setLastScrollTop(scrollTop)
  }, [scrollTop, window.location])

  const collapsed =
    (lastDirection === DOWN && delta > 100) ||
    (lastDirection === UP && delta < 20)

  console.log(lastDirection, lastLocation)

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
