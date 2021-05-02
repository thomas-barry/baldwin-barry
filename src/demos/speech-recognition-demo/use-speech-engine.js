import { useState, useEffect } from 'react'

const useSpeechEngine = ({ grammar }) => {
    const [speechEngine, setSpeechEngine] = useState(null)
    const [speechResult, setSpeechResult] = useState()
    const [listening, setListening] = useState(false)

    useEffect(() => {
        window.SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition
        window.SpeechGrammarList =
      window.webkitSpeechGrammarList || window.SpeechGrammarList
        window.SpeechRecognitionEvent =
      window.webkitSpeechRecognitionEvent || window.SpeechRecognitionEvent

        if (typeof window.SpeechRecognition !== 'undefined') {
            const speechEngine = new window.SpeechRecognition()
            speechEngine.lang = 'en-US'
            speechEngine.interimResults = false
            speechEngine.maxAlternatives = 1

            // Ignoring grammar for now as this functionality is not supported
            // in Chrome
            // if (grammar) {
            //   const speechRecognitionList = new window.SpeechGrammarList()
            //   speechRecognitionList.addFromString(grammar, 1)
            //   speechEngine.grammars = speechRecognitionList
            //   speechEngine.onnomatch = onSpeechNoMatch
            // }

            speechEngine.onresult = onSpeechResult
            speechEngine.onerror = onSpeechError
            speechEngine.onspeechend = onSpeechEnd(speechEngine)
            setSpeechEngine(speechEngine)
        }
    }, [])

    const listen = () => {
        setListening(true)
        setSpeechResult('')
        speechEngine.start()
    }

    const onSpeechResult = event => {
        setListening(false)
        setSpeechResult(event.results[0][0].transcript)
    }

    const onSpeechError = event => {}

    const onSpeechEnd = speechEngine => () => {
        speechEngine.stop()
    }

    return {
        speechEnabled: speechEngine !== null,
        listen,
        listening,
        speechResult,
    }
}

export default useSpeechEngine
