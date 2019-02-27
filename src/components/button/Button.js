import React from 'react'
import { Button } from 'rebass'

export default ({ children, ...keepProps }) => <Button {...keepProps} bg="highlight">{children}</Button>