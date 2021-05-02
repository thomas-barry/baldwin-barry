import React, { useContext } from 'react'
import IconButton from '@material-ui/core/IconButton'

import HamburgerIcon from '../../icons/hamburger/HamburgerIcon'
import LayoutContext from '../../layout/LayoutContext'

const MenuButton = () => {
    const {
        menuOpen,
        setMenuOpen,
    } = useContext(LayoutContext)

    const handleClick = () => !menuOpen && setMenuOpen(true)

    return (
        <IconButton
            disableRipple
            disableFocusRipple
            onClick={handleClick}
            className="menu-button">
            <HamburgerIcon />
        </IconButton>
    )
}

export default MenuButton
