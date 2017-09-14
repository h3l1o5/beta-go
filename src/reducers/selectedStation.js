import { SET_SELECTED_STATION } from '../actions/types'

const initialState = {
  id: null,
  name: null,
  highway: null,
  direction: null,
  region: null,
  predictData: null,
}

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_STATION:
      return {
        id: action.id,
        name: action.name,
        highway: action.highway,
        direction: action.direction,
        region: action.region,
        predictData: action.predictData,
      }
    default:
      return state
  }
}
