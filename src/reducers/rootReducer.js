import { combineReducers } from 'redux'

import userSelections from './userSelections'
import stations from './stations'
import selectedStation from './selectedStation'
import presentationBlock from './presentationBlock'
import common from './common'

export default combineReducers({
  userSelections,
  stations,
  selectedStation,
  presentationBlock,
  common,
})
