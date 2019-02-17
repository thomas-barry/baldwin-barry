import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import styled from 'styled-components'

import transformCode from '../../lib/transform-code/transform-code'

const StyledLiveEditor = styled(LiveEditor)`
  font-size: 16px;
`

const LiveDemo = ({ code, ...props }) => {
  return (
    <LiveProvider 
      {...props} 
      code={code}
      transformCode={transformCode}>
        <StyledLiveEditor />
        <LiveError />
        <LivePreview />
    </LiveProvider>
  )
}

export default LiveDemo