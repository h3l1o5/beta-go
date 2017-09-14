import { combineReducers } from 'redux'

import userSelections from './userSelections'
import stations from './stations'
import selectedStation from './selectedStation'
import presentationBlock from './presentationBlock'

export default combineReducers({
  userSelections,
  stations,
  selectedStation,
  presentationBlock,
})
