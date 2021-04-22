import React, { useRef, useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Box from '@material-ui/core/Box'

import LayoutContext from '../layout/LayoutContext'
import Menu from './menu/Menu'
import MenuButton from './menu-button/MenuButton'

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const MastheadContainer = styled.div` 
  background: #596171;
`

const InnerContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1024px;
  padding: 0.8rem 1.0875rem;
  padding: 0.8rem 1rem;
`

const Heading = styled.h1`
  margin: 0;
  letter-spacing: 2px;
  font-weight: normal;
  color: #e9ebf0;
  font-size: 24px;
`

const StyledLink = styled(Link)`
  color: #e9ebf0;
  text-decoration: none;
`

const Masthead = ({ siteTitle }) => {
  const mastheadRef = useRef()
  const { setMastheadHeight } = useContext(LayoutContext)

  useEffect(() => {
    setMastheadHeight(mastheadRef.current ? mastheadRef.current.clientHeight : 0)
  }, [mastheadRef.current])

  return (
    <FixedContainer ref={mastheadRef}>
      <MastheadContainer>
        <InnerContainer>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center">
            <Box flexGrow={1}>
              <Heading>
                <StyledLink to="/">{siteTitle}</StyledLink>
              </Heading>
            </Box>
            <MenuButton />
          </Box>
          <Menu>Menu</Menu>
        </InnerContainer>
      </MastheadContainer>
    </FixedContainer>
  )
}

Masthead.propTypes = {
  siteTitle: PropTypes.string,
}

Masthead.defaultProps = {
  siteTitle: ``,
}

export default Masthead
