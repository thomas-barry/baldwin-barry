import React, { useRef, useContext } from 'react'
import styled from '@emotion/styled'
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby'

import LayoutContext from '../../layout/LayoutContext'

const Container = styled.div`
  position: absolute;
  background-color: lightgray;
  top: -10px;
  right: 0;
  width: 280px;
  transform: ${({ transformY }) => `translateY(${transformY}px)`};
  transition: transform .3s; 
  transition-timing-function: ease;
  z-index: -1;
`

const Links = styled.ul`
   margin: 0;
   padding: 0;
   list-style-type: none;
`

const Menu = ({ className }) => {
  const menuRef = useRef()

  const { 
    mastheadHeight,
    menuOpen,
  } = useContext(LayoutContext) 

  const transformY = menuOpen ? 
    mastheadHeight : 
    mastheadHeight - (menuRef.current ? menuRef.current.clientHeight : 0)

  return (
    <Container 
      transformY={transformY}>
      <Box 
        p={2}
        className={className}
        ref={menuRef}>
        <Links>
          <li>
            <Link to="/app/foo">Foo</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </Links>
      </Box>
    </Container>
  )
}

export default Menu