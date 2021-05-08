import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Box from '@material-ui/core/Box'

import Masthead from '../masthead/Masthead'
import LayoutContext from './LayoutContext'

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
                    <Box className="bb-layout" display="flex">
                        <Masthead
                            siteTitle={data.site.siteMetadata.title} />
                        {mastheadHeight > 0 && <div className="bb-content" style={{ marginTop: mastheadHeight }}>
                            {children}
                            <div>© 2019 - {new Date().getFullYear()}</div>
                        </div>}
                    </Box>
                </LayoutContext.Provider>
            )}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
