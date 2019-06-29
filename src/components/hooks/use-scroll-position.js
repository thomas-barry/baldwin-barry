import { useState, useEffect } from 'react'
import _throttle from 'lodash/throttle' 

let supportsPassive = false

try {
  const opts = Object.defineProperty({}, 'passive', {
    get: () => {
      supportsPassive = true
      return null
    },
  })
  window.addEventListener('testPassive', null, opts)
  window.removeEventListener('testPassive', null, opts)
} catch (e) {
  console.log('Catch')
}

const getPosition = () => ({
  x: window ? window.pageXOffset : 0,
  y: window ? window.pageYOffset : 0,
})

const defaultOptions = {
  throttle: 100,
}

const useWindowScrollPosition = options => {
  const opts = Object.assign({}, defaultOptions, options)
  const [position, setPosition] = useState(getPosition())

  useEffect(() => {
    const handleScroll = _throttle(() => {
      setPosition(getPosition())
    }, opts.throttle)

    window && window.addEventListener(
      'scroll',
      handleScroll,
      supportsPassive ? { passive: true } : false
    )

    return () => {
      handleScroll.cancel()
      window && window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}

export default useWindowScrollPosition
