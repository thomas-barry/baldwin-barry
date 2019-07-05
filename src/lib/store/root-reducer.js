import { combineReducers } from 'redux'

import themeReducer from './theme/reducer'
import nameReducer from './name/reducer'

export default combineReducers({ 
  theme: themeReducer,
  name: nameReducer,
})
