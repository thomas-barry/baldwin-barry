import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import Button from '../../components/button/Button'
import transformCode from '../../lib/transform-code/transform-code'

// const StyledLiveEditor = styled(LiveEditor)`
//   font-size: 16px;
//   background-color: black;
// `

// const StyledLivePreview = styled(LivePreview)`
//   padding-top: 8px;
// `

const defaultScope = {
    Button,
}

const LiveDemo = ({ code, noInline = false, scope = {} }) => (
    <LiveProvider
        code={code.replace(/^\n/, '\n ').trim()}
        noInline={noInline}
        scope={{ ...scope, ...defaultScope }}
        transformCode={transformCode}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
    </LiveProvider>
)

export default LiveDemo
