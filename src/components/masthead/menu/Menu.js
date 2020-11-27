import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Box from '@material-ui/core/Box';

import LayoutContext from '../../layout/LayoutContext'

const Menu = ({ className }) => {
  const { mastheadHeight: top }= useContext(LayoutContext) 

  return top > 0 ? (
    <Box 
      className={className}
      style={{ top }}>
    Stuff
    </Box>
  ) : null
}

const StyledMenu = styled(Menu)`
  position: absolute;
  background-color: lightgray;
  top: 68px;
  left: 0;
  right: 0;
  height: auto;
`

export default StyledMenu