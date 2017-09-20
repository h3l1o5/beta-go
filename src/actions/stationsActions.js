import axios from 'axios'

import { SET_STATIONS } from './types'

const fetchAndSetStations = () => dispatch => {
  axios.get(`/api/stations/`).then(res => {
    dispatch({
      type: SET_STATIONS,
      stations: res.data.stations,
    })
  })
}

export { fetchAndSetStations }
