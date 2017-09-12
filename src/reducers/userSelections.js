import {
  SET_USER_SELECTED_DIRECTION,
  SET_USER_SELECTED_HIGHWAY,
} from '../actions/types'

const initialState = {
  direction: null,
  highway: null,
  stationID: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_SELECTED_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      }
    case SET_USER_SELECTED_HIGHWAY:
      return {
        ...state,
        highway: action.highway,
      }
    default:
      return state
  }
}
