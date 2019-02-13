import React from 'react'
import styled from 'styled-components'
import Flexbox from 'flexbox-react'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const StyledLiveEditor = styled(LiveEditor)`
  font-size: 16px;
`

const code = (` 
class MyComponent extends React.Component {
  render() {
    return (
      <div>WHy, Hello</div>
    )
  }
}
`).trim()

const LiveExample = () => {
  return (
    <LiveProvider code={code}>
      <Flexbox flexDirection="row">
        <Flexbox flexDirection="column">
          <StyledLiveEditor />
          <LiveError />
        </Flexbox> 
        <LivePreview />
      </Flexbox>
    </LiveProvider>
  )
}

export default LiveExample