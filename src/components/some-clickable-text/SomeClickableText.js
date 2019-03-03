import React, { useState } from 'react'
import styled from '@emotion/styled'

const BoldParagraph = styled.p`
  font-weight: bold;
  color: #afaffc;
`

const increment = (setCount, counter) => () => setCount(counter + 1)

const SomeClickableText = () => {
  const [counter, setCount] = useState(0) 
  return (
    <React.Fragment>
      <p onClick={increment(setCount, counter)} tabIndex="0">
        But this, this sentence right here, is rendered by a React component imported into the markdown document.
      </p>
      <p>To prove that it's not just plain markdown text, click anywhere on that previous sentence.</p>
      {counter > 0 && <BoldParagraph>You clicked {counter} time{counter > 1 ? 's' : ''}.</BoldParagraph>}
    </React.Fragment>
  )

}

export default SomeClickableText