import axios from 'axios'

import { SET_SELECTED_STATION } from './types'

const fetchAndSetSelectedStation = stationID => dispatch => {
  axios.get(`/api/station/${stationID}/info`).then(infoRes => {
    const { id, name, highway, direction, region } = infoRes.data
    axios.get(`/api/station/${stationID}/data`).then(dataRes => {
      const { predictData } = dataRes.data
      dispatch({
        type: SET_SELECTED_STATION,
        id,
        name,
        highway,
        direction,
        region,
        predictData,
      })
    })
  })
}

export { fetchAndSetSelectedStation }
