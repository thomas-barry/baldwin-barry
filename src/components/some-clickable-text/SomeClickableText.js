import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import styled from 'styled-components'

const BoldParagraph = styled.p`
  font-weight: bold;
  color: #afaffc;
`

const withCounter = withStateHandlers(
  () => ({
    counter: 0,
  }),
  {
    increment: ({ counter }) => () => ({ counter: counter + 1 })
  }
)

const SomeClickableText = ({ counter, increment }) => (
  <React.Fragment>
    <p onClick={increment} tabIndex="0">
      But this, this sentence right here, is rendered by a React component imported into the markdown document.
    </p>
    <p>To prove that it's not just plain markdown text, click anywhere on that previous sentence.</p>
    {counter > 0 && <BoldParagraph>You clicked {counter} time{counter > 1 ? 's' : ''}.</BoldParagraph>}
  </React.Fragment>
)

export default compose(withCounter)(SomeClickableText)