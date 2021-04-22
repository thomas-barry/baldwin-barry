import React, { useContext } from 'react'
import styled from '@emotion/styled'
import IconButton from '@material-ui/core/IconButton'
import { StylesProvider } from "@material-ui/core/styles"

import HamburgerIcon from '../../icons/hamburger/HamburgerIcon'
import LayoutContext from '../../layout/LayoutContext'

const StyledIcon = styled(HamburgerIcon)`
  path {
    fill: #e9ebf0;
  }
`
const StyledIconButton = styled(IconButton)`
  padding: 0;
`

const MenuButton = () => {
  const {
    menuOpen,
    setMenuOpen,
  } = useContext(LayoutContext)

  const handleClick = () => !menuOpen && setMenuOpen(true)

  return (
    <StylesProvider injectFirst>
      <StyledIconButton
        disableRipple
        disableFocusRipple
        onClick={handleClick}>
        <StyledIcon />
      </StyledIconButton>
    </StylesProvider>
  )
}

export default MenuButton
