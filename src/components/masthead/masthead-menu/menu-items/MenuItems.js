import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const MenuItems = ({ links }) => (
    <ul>
        {links.map(({ to, label }) => (
            <li key={to}>
                <GatsbyLink key={to} to={to}>{label}</GatsbyLink>
            </li>
        ))}
    </ul>
)

export default MenuItems
