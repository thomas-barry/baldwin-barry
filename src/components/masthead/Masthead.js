import React, { useRef, useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

import LayoutContext from '../layout/LayoutContext'
import Menu from './menu/Menu'
import MenuButton from './menu-button/MenuButton'

const Masthead = ({ siteTitle }) => {
    const mastheadRef = useRef()
    const { setMastheadHeight } = useContext(LayoutContext)

    useEffect(() => {
        setMastheadHeight(mastheadRef.current ? mastheadRef.current.clientHeight : 0)
    }, [mastheadRef.current])

    return (
        <div ref={mastheadRef} className="bb-masthead-fixed-container">
            <div className="bb-masthead">
                <div className="bb-masthead-inner">
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        pl={3}
                        pr={2}>
                        <Box flexGrow={1}>
                            <h1>
                                <Link to="/">{siteTitle}</Link>
                            </h1>
                        </Box>
                        <MenuButton />
                    </Box>
                    <Menu>Menu</Menu>
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
