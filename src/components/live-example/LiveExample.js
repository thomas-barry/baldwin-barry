import React from 'react'
import * as Babel from '@babel/standalone'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const transformCode = code => {
    try {
        return Babel.transform(code, {
            presets: ['react', 'stage-0'],
        }).code
    } catch (e) {
        return code
    }
}

// const StyledLiveEditor = styled(LiveEditor)`
//   font-size: 16px;
// `

const code = ` 
class MyComponent extends React.Component {

  componentDidMount() {
    console.log('Did mount')
  }
  
  handleClick = event => {
    console.log('Click')
  }

  render() {
    return (
      <div>WHy, Hello</div>
    )
  }
}
`.trim()

const LiveExample = () => {
    return (
        <LiveProvider code={code} transformCode={transformCode}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    )
}

export default LiveExample
