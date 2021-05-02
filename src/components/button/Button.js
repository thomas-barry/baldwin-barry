import React from 'react'

const Button = React.forwardRef(({ onClick, disabled, level = 'primary', ...props }, ref) => {

    const _onClick = event => !disabled && onClick && onClick(event)

    return (
        <button
            className="bb-button"
            onClick={_onClick}
            disabled={disabled}
            ref={ref}
            {...props} />
    )
})

Button.displayName = 'Button'

export default Button
