import React, { useState } from 'react'
import styled from '@emotion/styled'

const Circle = styled.div` 
  display: inline-block;
  height: 100%;
  width: 100%; 
  border-radius: 50%;
  background: #6c6cac;
  transition: background 1s;
  &.transition{
    background: #60b54f;
  }
`

export default () => {
  const [transition, setTransition] = useState(false)

  const onMouseEnter = () => setTransition(prev => !prev)

  return (
    <Circle
      onMouseEnter={onMouseEnter}
      className={transition && 'transition'}
    />
  )
}