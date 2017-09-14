import { SET_AMOUNT_PREDICT_BARCHART_ACTIVEID } from '../actions/types'

const initialState = {
  amountPredictBarchart: {
    activeID: null,
  },
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_AMOUNT_PREDICT_BARCHART_ACTIVEID:
      return {
        ...state,
        amountPredictBarchart: {
          activeID: action.id,
        },
      }
    default:
      return state
  }
}
