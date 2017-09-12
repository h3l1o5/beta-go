import axios from 'axios'

import { SET_SELECTED_STATION_INFO } from './types'

const fetchAndSetStationInfo = stationID => dispatch => {
  axios.get(`/api/chargeStation/${stationID}/info`).then(res => {
    const { id, name, highway, direction, region } = res.data
    dispatch({
      type: SET_SELECTED_STATION_INFO,
      id,
      name,
      highway,
      direction,
      region,
    })
  })
}

export { fetchAndSetStationInfo }
