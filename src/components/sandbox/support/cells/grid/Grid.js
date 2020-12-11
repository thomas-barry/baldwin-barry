import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import GridContext from '../GridContext'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const ClipPath = styled(Box)`
  clip-path: circle(50%);
`

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0;
  grid-template-columns: ${({ gridSize }) => `repeat(${gridSize}, 25px)` };
  grid-template-rows: ${({ gridSize }) => `repeat(${gridSize}, 25px)` };
  grid-auto-flow: row;
  animation: ${rotate} 12s infinite linear;
  animation-play-state: ${({ animate }) => animate ? 'running' : 'paused'}
`

export default ({ children }) => {
  const { gridSize, animate } = useContext(GridContext)
  return (
    <ClipPath>
      <Grid
        gridSize={gridSize}
        animate={animate}>
        {children}
      </Grid>
    </ClipPath>
  )
}
