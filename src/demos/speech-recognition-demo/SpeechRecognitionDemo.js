import React from 'react'

import { Button } from 'capybara-react-ui'
import useSpeechEngine from './use-speech-engine'
import colorsGrammar from './colors-grammar'

const SpeechRecognitionDemo = () => {
    const { speechEnabled, listen, listening, speechResult } = useSpeechEngine({
        grammar: colorsGrammar,
    })

    return (
        <React.Fragment>
            <p>Speech Recognition Enabled: {speechEnabled ? 'Yes' : 'No'}</p>
            {speechEnabled && (
                <React.Fragment>
                    <p>Listening: {listening ? 'Yes' : 'No'}</p>
                    <p>Result: {speechResult}</p>
                    <Button onClick={listen} disabled={listening}>
                        Listen
                    </Button>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default SpeechRecognitionDemo
