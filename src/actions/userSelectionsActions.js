import { SET_USER_SELECTED_DIRECTION, SET_USER_SELECTED_HIGHWAY } from './types'

const setUserSelectedDirection = direction => ({
  type: SET_USER_SELECTED_DIRECTION,
  direction,
})

const setUserSelectedHighway = highway => ({
  type: SET_USER_SELECTED_HIGHWAY,
  highway,
})

export { setUserSelectedDirection, setUserSelectedHighway }
