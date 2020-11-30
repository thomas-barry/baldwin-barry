import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Box from '@material-ui/core/Box'

import Masthead from '../masthead/Masthead'
import LayoutContext from './LayoutContext'

const Container = styled(Box)`
  width: 100%;
  height: 100%;
`

const Footer = styled.footer`
  margin-top: 1rem;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 0px 16px 16px; 
  width: 100%;
  padding-top: 80px;
  border-left: 1px solid #d0cece;
  border-right: 1px solid #d0cece;
  background-color: white;

  @media (max-width: 998px) {
    border-left: none;
    border-right: none;
  }

  @media (min-width: 960px) {
    width: 960px;
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
          <Container 
            display="flex">
            <Masthead 
              siteTitle={data.site.siteMetadata.title} />
            <Content>
              {children}
              <Footer>© 2019 - {new Date().getFullYear()}</Footer>
            </Content>
          </Container> 
        </LayoutContext.Provider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
