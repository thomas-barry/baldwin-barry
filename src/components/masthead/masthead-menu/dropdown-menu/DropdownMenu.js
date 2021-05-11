import React, { useRef, useState, useContext, useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import LayoutContext from '../../../layout/LayoutContext'
import Overlay from '../../../overlay/Overlay'
import MenuItems from '../menu-items/MenuItems'

const TRANSITION_TIME = 200

const DropdownMenu = ({ links, className }) => {
    const menuRef = useRef()
    const [closing, setClosing] = useState(false)

    const {
        menuOpen,
        setMenuOpen,
        mastheadHeight,
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

    const onOverlayClick = () => menuOpen && setClosing(true)

    const styles = {
        top: mastheadHeight,
        height: menuOpen ? menuRef.current?.clientHeight : 0,
        transition: `height ${TRANSITION_TIME}ms ease`,
    }

    return (
        <React.Fragment>
            <div
                className="dropdown-menu"
                style={styles}>
                <div
                    ref={menuRef}
                    className={className}>
                    <MenuItems links={links} />
                </div>
            </div>
            {menuOpen && <Overlay onClick={onOverlayClick} />}
        </React.Fragment>
    )
}

export default DropdownMenu
