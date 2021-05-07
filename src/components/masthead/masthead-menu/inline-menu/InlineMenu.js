import React from 'react'

import MenuItems from '../menu-items/MenuItems'

const InlineMenu = ({ links }) => (
    <div className="inline-menu">
        <MenuItems links={links} />
    </div>
)

export default InlineMenu
