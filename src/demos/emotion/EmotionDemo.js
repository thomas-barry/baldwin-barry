import React from 'react'
import { css } from '@emotion/core'

const base = css`
  color: hotpink;
`

const EmotionDemo = () => {
  return (
    <div
      css={css`
        ${base};
        padding: 4px 12px;
        background-color: gray;
      `}
    >
      HEY
    </div>
  )
}

export default EmotionDemo