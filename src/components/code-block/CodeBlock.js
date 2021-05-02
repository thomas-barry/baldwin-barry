import React, { useEffect } from 'react'
import Prism from 'prismjs'

// const StyledCode = styled.code`
//   font-size: 16px;
// `

const CodeBlock = ({ children, language }) => {
    useEffect(() => Prism.highlightAll())

    return (
        <pre>
            <code className={`language-${language}`}>
                {children}
            </code>
        </pre>
    )
}

export default CodeBlock
