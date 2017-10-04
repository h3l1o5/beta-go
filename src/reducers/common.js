import { SET_IS_LOADING } from '../actions/types'

const initialState = {
  isLoading: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}
