import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { withStateHandlers } from 'recompose'
import styled from '@emotion/styled'

import Button from '../../components/button/Button'
import transformCode from '../../lib/transform-code/transform-code'

const StyledLiveEditor = styled(LiveEditor)`
  font-size: 16px;
`

const StyledLivePreview = styled(LivePreview)`
  padding-top: 8px;
`

const scope = {
  withStateHandlers,
  Button,
}

const LiveDemo = ({ code, noInline = false }) => {
  return (
    <LiveProvider
      code={code}
      noInline={noInline}
      scope={scope}
      transformCode={transformCode}
    >
      <StyledLiveEditor />
      <LiveError />
      <StyledLivePreview />
    </LiveProvider>
  )
}

export default LiveDemo
