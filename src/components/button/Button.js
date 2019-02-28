import React from 'react'
import { Button } from '@smooth-ui/core-sc'

export default ({ children, ...keepProps }) => <Button {...keepProps}>{children}</Button>