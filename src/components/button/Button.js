import React from 'react'
import { withTheme } from 'emotion-theming'
import styled from '@emotion/styled'

import { Button as BaseButton } from 'capybara-react-ui'

const StyledButton = withTheme(styled(BaseButton)`
  background: ${({ theme, secondary, disabled }) =>
    secondary ?
      disabled ?
        theme.secondaryHighlightBackgroundDisabled :
        theme.secondaryHighlightBackground :
      disabled ?
      theme.highlightBackgroundDisabled :
      theme.highlightBackground};
  color: ${({ theme, secondary, disabled }) =>
    secondary ?
      disabled ?
        theme.secondaryHighlightColorDisabled :
        theme.secondaryHighlightColor :
      disabled ?
      theme.highlightColorDisabled :
      theme.highlightColor};
  border-radius: ${({ theme }) => theme.buttonBorderRadius};
`)

const Button = props => {
  return <StyledButton {...props} />
}

export default Button
