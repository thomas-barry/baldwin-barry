import React, { useRef, useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

import useWindowSize from '../hooks/use-window-size'
import LayoutContext from '../layout/LayoutContext'
import MastheadMenu from './masthead-menu/MastheadMenu'
import links from './links'

const Masthead = ({ siteTitle }) => {
    const mastheadRef = useRef()
    const { setMastheadHeight } = useContext(LayoutContext)

    const { width: windowWidth } = useWindowSize()

    useEffect(() => {
        setMastheadHeight(mastheadRef.current ? mastheadRef.current.clientHeight : 0)
    }, [mastheadRef.current, windowWidth])

    return (
        <div ref={mastheadRef} className="bb-masthead-fixed-container">
            <div className="bb-masthead">
                <div className="bb-masthead-inner">
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        pl={2}
                        pr={2}>
                        <Box flexGrow={1}>
                            <h1>
                                <Link to="/">{siteTitle}</Link>
                            </h1>
                        </Box>
                        <MastheadMenu links={links}/>
                    </Box>
                </div>
            </div>
        </div>
    )
}

Masthead.propTypes = {
    siteTitle: PropTypes.string,
}

Masthead.defaultProps = {
    siteTitle: ``,
}

export default Masthead
