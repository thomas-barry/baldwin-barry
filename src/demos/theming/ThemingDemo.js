import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import Button from '../../components/button/Button'
import RadioButtonIcon from '../../components/icons/radio-button-icon/RadioButtonIcon'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ThemingDemo = ({ theme }) => {
  return (
    <StyledContainer>
      <div>{theme}</div>
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

const mapStateToProps = state => ({
  theme: state.theme,
})

export default connect(
  mapStateToProps,
  null
)(ThemingDemo)
