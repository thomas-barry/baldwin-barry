import React from 'react'
import styled from '@emotion/styled'

import Button from '../../components/button/Button'
import RadioButtonIcon from '../../components/icons/radio-button-icon/RadioButtonIcon'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ThemingDemo = () => {
  return (
    <StyledContainer>
      <Button>Primary</Button>
      <Button disabled>Primary (disabled)</Button>
      <Button secondary>Secondary</Button>
      <Button secondary disabled>
        Secondary (disabled)
      </Button>
      <RadioButtonIcon />
      <RadioButtonIcon checked />
      <RadioButtonIcon focused checked />
    </StyledContainer>
  )
}

export default ThemingDemo
