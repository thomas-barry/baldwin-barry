import React, { useRef, useState, useContext, useEffect } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Link as GatsbyLink } from 'gatsby'

import LayoutContext from '../../../layout/LayoutContext'
import MenuItems from '../menu-items/MenuItems'

const TRANSITION_TIME = 250

const Link = ({ to, children }) => (
    <li>
        <GatsbyLink to={to}>
            {children}
        </GatsbyLink>
    </li>
)

const DropdownMenu = ({ links, className }) => {
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
            className="dropdown-menu"
            style={styles}>
            {(menuOpen || closing) &&
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div
                        ref={menuRef}
                        className={className}>
                        <MenuItems links={links} />
                    </div>
                </ClickAwayListener>
            }
        </div>
    )
}

export default DropdownMenu
