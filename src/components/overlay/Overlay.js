import React from 'react'

const Overlay = React.forwardRef(({ className, onClick }, ref) => (
    <div ref={ref} onClick={onClick } className={`bb-overlay ${className || ''}`} />
))

Overlay.displayName = 'Overlay'

export default Overlay
