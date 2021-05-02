import React from 'react'
import Box from '@material-ui/core/Box'

import Button from '../../button/Button'

// const StyledOuter = styled.div`
//     display: grid;
//     place-content: center;
//     background: rgb(var(--clr-body));
//     border-radius: 8px;
//     padding: 5vh;
// `

// const StyledInner = styled.div`
//     display: grid;
//     place-content: center;
//     background: lightgray;
//     padding: 16px;
//     border-radius: 8px;
//     text-align: center;
// `

// const StyledHeading = styled.h2`
//     color: blue;
//     font-size: 1.3rem;
// `

const FocusState = () => (
    <React.Fragment>
        <Box><Button>Continue</Button></Box>
        <Box mt={2}>
            <div>
                <h2>Styled Content</h2>
                <div>Centered using display: grid</div>
            </div>
        </Box>
    </React.Fragment>
)

export default FocusState
