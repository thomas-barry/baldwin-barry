import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTheme } from '../../lib/store/theme/actions'

const getTheme = state => state.theme

const ReduxHooks = () => {
  const theme = useSelector(getTheme)
  const dispatch = useDispatch()

  return (
    <div>Theme: {theme}</div>
  )
}

export default ReduxHooks