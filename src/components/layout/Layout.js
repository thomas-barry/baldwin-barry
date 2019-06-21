import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import SiteHeader from '../site-header/SiteHeader'

const StyledFooter = styled.footer`
  margin-top: 1rem;
`

const StyledContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 80px;
`

const Layout = ({ children }) => (
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
      <React.Fragment>
        <SiteHeader siteTitle={data.site.siteMetadata.title} />
        <StyledContentContainer>
          {children}
          <StyledFooter>© {new Date().getFullYear()}</StyledFooter>
        </StyledContentContainer>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
