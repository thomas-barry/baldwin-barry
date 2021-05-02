import React from 'react'

const AnimatedGrid = () => {
    return (
        <iframe
            src="https://codesandbox.io/embed/animatedgridone-1us45?fontsize=14&hidenavigation=1&theme=dark?view=preview?hidedevtools=1"
            style={{
                width: '100%',
                height: '900px',
                border: 0,
                borderRadius: '4px',
                overflow: 'hidden'
            }}
            title="AnimatedGridOne"
            allow={`
        accelerometer; 
        ambient-light-sensor; 
        camera; 
        encrypted-media; 
        geolocation; 
        gyroscope; 
        hid; 
        microphone; 
        midi; 
        payment; 
        usb; 
        vr; 
        xr-spatial-tracking;
      `}
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
    )
}

export default AnimatedGrid

