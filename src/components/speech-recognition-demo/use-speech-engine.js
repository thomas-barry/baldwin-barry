import { useState, useEffect } from 'react'

const useSpeechEngine = () => {
  const [speechEngine, setSpeechEngine] = useState(null)
  const [speechResult, setSpeechResult] = useState()
  const [listening, setListening] = useState(false)
  
  useEffect(() => {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
    if ('SpeechRecognition' in window) {
      const speechEngine = new window.SpeechRecognition()
      speechEngine.onresult = onSpeechResult(speechEngine)
      speechEngine.onerror = onSpeechError(speechEngine)
      speechEngine.continuous = true
      setSpeechEngine(speechEngine)
    }
  }, [])

  const listen = () => {
    setListening(true)
    setSpeechResult('')
    speechEngine.start()
  }

  const onSpeechResult = speechEngine => event => {
    setListening(false)
    setSpeechResult(event.results[0][0].transcript)
    speechEngine.stop()
  }

  const onSpeechError = speechEngine => event => {
    console.log(event)
    speechEngine.stop()
  }

  return ({
    speechEnabled: speechEngine !== null,
    listen,
    listening,
    speechResult,
  })

}

export default useSpeechEngine