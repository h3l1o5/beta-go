import { SET_SELECTED_STATION_INFO } from '../actions/types'

const initialState = {
  id: null,
  name: null,
  highway: null,
  direction: null,
  region: null,
  data: null,
}

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_STATION_INFO:
      return {
        ...state,
        id: action.id,
        name: action.name,
        highway: action.highway,
        direction: action.direction,
        region: action.region,
      }
    default:
      return state
  }
}
