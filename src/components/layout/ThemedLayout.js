import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import Layout from './Layout'

const theme = {
  highlightColor: 'white',
  highlightColorDisabled: '#f5f5f5',
  secondaryHighlightColor: '#44464a',
  secondaryHighlightColorDisabled: '#bfc0be',
  highlightBackground: '#5174b8',
  highlightBackgroundDisabled: '#b9c7e3',
  secondaryHighlightBackground: '#cfd1d7',
  secondaryHighlightBackgroundDisabled: '#f5f5f5',
  buttonBorderRadius: '2px',
}

const ThemedLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
    </ThemeProvider>
  )
}

export default ThemedLayout
