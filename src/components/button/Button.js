import React from 'react'

// const StyledButton = styled.button`
//     border: none;
//     background: var(--clr-highlight);
//     color: white;
//     border-radius: 8px;
//     padding: 4px 1rem;
//     line-height: 1.8rem;
//     cursor: pointer;
//     &:focus {
//         outline: none;
//     }
//     &:focus-visible {
//         box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(var(--clrvals-highlight), 0.6);
//     }
//     &:active {
//         background: rgba(var(--clrvals-primary), 0.6);
//     }
// `

const Button = React.forwardRef(({ onClick, disabled, focusDisabled, level = 'primary', ...props }, ref) => {
  return (
    <button onClick={onClick} disabled={disabled} focusDisabled={focusDisabled} ref={ref} {...props} />
  )
})

export default Button
