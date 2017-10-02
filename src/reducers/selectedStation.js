import { SET_SELECTED_STATION } from '../actions/types'

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_STATION:
      return {
        id: action.id,
        name: action.name,
        highway: action.highway,
        direction: action.direction,
        region: action.region,
        prior: action.prior,
        next: action.next,
        predictedData: action.predictedData,
        realtimeData: action.realtimeData,
      }
    default:
      return state
  }
}
