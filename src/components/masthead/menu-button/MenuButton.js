import React from 'react'
import styled from '@emotion/styled'

import HamburgerIcon from '../../icons/hamburger/HamburgerIcon'

const StyledIcon = styled(HamburgerIcon)`
  path {
    fill: white;
  }
`

const MenuButton = () => {
  return (
    <React.Fragment>
      <StyledIcon />
    </React.Fragment>
  )
}

export default MenuButton