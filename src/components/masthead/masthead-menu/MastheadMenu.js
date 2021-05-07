import React from 'react'

import MenuButton from './menu-button/MenuButton'
import MenuItems from './menu-items/MenuItems'
import DropdownMenu from './dropdown-menu/DropdownMenu'
import InlineMenu from './inline-menu/InlineMenu'

const MastheadMenu = ({ links }) => {
    return (
        <React.Fragment>
            <MenuButton />
            <DropdownMenu links={links} />
            <InlineMenu links={links} />
        </React.Fragment>
    )
}

export default MastheadMenu
