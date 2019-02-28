import React from 'react'

import Button from '../button/Button'
import useSpeechEngine from './use-speech-engine'

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
      {speechEnabled && 
        <React.Fragment>
          <p>Listening: {listening ? 'Yes' : 'No'}</p>
          <p>Result: {speechResult}</p>
          <Button onClick={listen} disabled={listening}>Listen</Button>
        </React.Fragment>
      }
    </React.Fragment>
  )

}

export default SpeechRecognitionDemo