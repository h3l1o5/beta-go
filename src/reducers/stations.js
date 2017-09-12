import { SET_STATIONS } from '../actions/types'

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_STATIONS:
      return action.stations
    default:
      return state
  }
}
