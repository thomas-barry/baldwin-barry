import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Masthead from '../masthead/Masthead'
import LayoutContext from './LayoutContext'

const StyledFooter = styled.footer`
  margin-top: 1rem;
`

const StyledContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 16px 16px; 
  padding-top: 80px;
  border-left: 1px solid darkgray;
  border-right: 1px solid darkgray;
  background-color: white;

  @media (max-width: 998px) {
    border-left: none;
    border-right: none;
  }
`

const Layout = ({ children }) => {
  const [mastheadHeight, setMastheadHeight] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const context = {
    mastheadHeight,
    setMastheadHeight,
    menuOpen,
    setMenuOpen,
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <LayoutContext.Provider value={context}>
          <Masthead 
            siteTitle={data.site.siteMetadata.title} />
          <StyledContentContainer>
            {children}
            <StyledFooter>© {new Date().getFullYear()}</StyledFooter>
          </StyledContentContainer>
        </LayoutContext.Provider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
