import React from 'react'
import styled from 'styled-components'

import Button from '../button/Button'
import useSpeechEngine from './use-speech-engine'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;  
`

const SpeechRecognitionDemo = () => {

  const {
    speechEnabled,
    listen,
    listening,
    speechResult,
  } = useSpeechEngine() 

  return (
    <React.Fragment>
      <p>Speech Recognition Enabled: {speechEnabled ? 'Yes' : 'No'}</p>
      <p>Listening: {listening ? 'Yes' : 'No'}</p>
      <p>Result: {speechResult}</p>
      <ButtonContainer>
        <Button onClick={listen} disabled={listening}>Listen</Button>
      </ButtonContainer>
    </React.Fragment>
  )

}

export default SpeechRecognitionDemo