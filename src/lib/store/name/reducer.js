import { NAME_SET } from './actions'

export default (state = '', action) => {
  switch (action.type) {
    case NAME_SET: {
      return action.name
    }
    default:
      return state
  }
}
