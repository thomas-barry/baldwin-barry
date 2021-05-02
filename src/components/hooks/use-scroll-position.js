import { useState, useEffect } from 'react'
import _throttle from 'lodash/throttle'

let supportsPassive = false
const windowGlobal = typeof window !== 'undefined' && window

try {
    const opts = Object.defineProperty({}, 'passive', {
        get: () => {
            supportsPassive = true
            return null
        },
    })
    windowGlobal.addEventListener('testPassive', null, opts)
    windowGlobal.removeEventListener('testPassive', null, opts)
} catch (e) {}

const getPosition = () => ({
    x: windowGlobal ? windowGlobal.pageXOffset : 0,
    y: windowGlobal ? windowGlobal.pageYOffset : 0,
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

        windowGlobal && windowGlobal.addEventListener(
            'scroll',
            handleScroll,
            supportsPassive ? { passive: true } : false
        )

        return () => {
            handleScroll.cancel()
            windowGlobal && windowGlobal.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return position
}

export default useWindowScrollPosition
