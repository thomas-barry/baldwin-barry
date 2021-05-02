import React, { useRef, useState, useContext, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Link as GatsbyLink } from 'gatsby'

import LayoutContext from '../../layout/LayoutContext'
import links from './links'

const TRANSITION_TIME = 250

const Link = ({ to, children }) => (
    <li>
        <GatsbyLink to={to}>
            {children}
        </GatsbyLink>
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

    const styles = {
        transform: `translateY(${translateY}px)`,
        transition: `transform ${TRANSITION_TIME}ms ease`,
    }

    return (
        <div
            className="masthead-menu"
            style={styles}>
            {(menuOpen || closing) &&
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Box
                        ref={menuRef}
                        className={className}>
                        <ul>
                            {links.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
                        </ul>
                    </Box>
                </ClickAwayListener>
            }
        </div>
    )
}

export default Menu
