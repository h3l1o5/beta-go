import axios from 'axios'

import { SET_STATIONS } from './types'

const fetchAndSetStations = (highway, direction) => dispatch => {
  axios.get(`/api/stations/${highway}/${direction}`).then(res => {
    dispatch({
      type: SET_STATIONS,
      stations: res.data.stations,
    })
  })
}

export { fetchAndSetStations }
