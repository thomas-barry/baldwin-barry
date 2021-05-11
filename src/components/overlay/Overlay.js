import React from 'react'

const Overlay = React.forwardRef(({ className, onClick, children }, ref) => (
    <div ref={ref} onClick={onClick } className={`bb-overlay ${className || ''}`}>{children}</div>
))

Overlay.displayName = 'Overlay'

export default Overlay
