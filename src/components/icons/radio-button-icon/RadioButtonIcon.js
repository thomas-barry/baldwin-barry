import React from 'react'
import { withTheme } from 'emotion-theming'
import styled from '@emotion/styled'

import { RadioButtonIcon as BaseRadioButtonIcon } from 'capybara-react-ui'

const StyledRadioButtonIcon = withTheme(styled(BaseRadioButtonIcon)`
  padding: 5px;
  .bb_radiobutton_highlight {
    fill: ${({ theme, checked }) =>
      checked ? theme.highlightBackground : theme.highlightColor};
  }
  .bb_radiobutton_outline {
    fill: ${({ theme, focused }) =>
      focused ? theme.highlightBackground : 'currentColor'};
  }
`)

const RadioButtonIcon = props => {
  return <StyledRadioButtonIcon {...props} />
}

export default withTheme(RadioButtonIcon)
