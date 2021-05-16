import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Box from '@material-ui/core/Box'
import Headroom from 'react-headroom'

import Masthead from '../masthead/Masthead'
import LayoutContext from './LayoutContext'

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [mastheadHeight, setMastheadHeight] = useState(0)

    const context = {
        menuOpen,
        setMenuOpen,
        mastheadHeight,
        setMastheadHeight,
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
                    <div className="bb-layout">
                        <Headroom>
                            <Masthead siteTitle={data.site.siteMetadata.title} />
                        </Headroom>
                        <div className="bb-content">
                            {children}
                            <div>© 2019 - {new Date().getFullYear()}</div>
                        </div>
                    </div>
                </LayoutContext.Provider>
            )}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
