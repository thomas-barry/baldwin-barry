import React, { useEffect } from 'react'
import Prism from 'prismjs'
import styled from 'styled-components'

const StyledCode = styled.code`
  font-size: 16px;
`

const CodeBlock = ({ children, language }) => {

  useEffect(() => Prism.highlightAll())

  return (
    <pre>
      <StyledCode className={`language-${language}`}>
        {children}
      </StyledCode>
    </pre>
  )

}

export default CodeBlock