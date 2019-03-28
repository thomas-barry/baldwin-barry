import { THEME_SET } from './actions'

export default (state = 'default', action) => {
  switch (action.type) {
    case THEME_SET:
      return action.theme
    default:
      return state
  }
}
