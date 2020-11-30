import React, { useRef, useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Box from '@material-ui/core/Box'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Link as GatsbyLink } from 'gatsby'

import LayoutContext from '../../layout/LayoutContext'
import links from './links'

const TRANSITION_TIME = 500

const Container = styled.div`
  position: absolute;
  background-color: #f0f0f0;
  border: 1px solid lightgray;
  border-top: none;
  box-shadow: -3px 3px 6px 0px rgba(50, 50, 50, 0.3);
  border-right: 1px solid #d0cece;
  bottom: 0;
  right: 0;
  width: 280px;
  z-index: -1;
  transform: ${props => `translateY(${props.translateY}px)`};
  transition: transform ${TRANSITION_TIME}ms ease;
`

const Links = styled.ul`
   margin: 0;
   padding: 0;
   list-style-type: none;
   li:not(last-of-type) {
     margin: 0; 
     border-bottom: 1px solid lightgray;
   }
`

const StyledGatsbyLink = styled(GatsbyLink)`
  display: block;
  padding: 12px 0 12px 16px;
  width: 100%;
  height: 100%;
  color: #727272;
  text-decoration: none;
  :hover {
    background-color: #ffffff;
  }
`

const Link = ({ to, children }) => (
  <li>
    <StyledGatsbyLink to={to}>
      {children}
    </StyledGatsbyLink>
  </li>
) 

const Menu = ({ className }) => {
  const menuRef = useRef()
  const [closing, setClosing] = useState(false)
  const [translateY, setTranslateY] = useState(0)

  const { 
    menuOpen,
    setMenuOpen,
  } = useContext(LayoutContext) 

  useEffect(() => {
    let timeout
    if (menuOpen && closing) {
      timeout = setTimeout(() => {
        setMenuOpen(false) 
        setClosing(false)
      }, TRANSITION_TIME)
    }
    return () => clearTimeout(timeout)
  }, [menuOpen, closing])

  useEffect(() => {
    if (menuOpen && !closing && menuRef.current) {
      setTranslateY(menuRef.current.clientHeight)
    } else {
      setTranslateY(0)
    }
  }, [menuOpen, closing, menuRef.current])

  const handleClickAway = () => {
    if (menuOpen) {
      setClosing(true)
    }
  }

  return ( 
    <Container 
      translateY={translateY}
      closing={closing}>
      {(menuOpen || closing) && 
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box 
            ref={menuRef}
            className={className}>
            <Links>
              {links.map(({ to, label })=> <Link key={to} to={to}>{label}</Link>)}
            </Links>
          </Box>
        </ClickAwayListener>
      }
    </Container>
  )
}

export default Menu