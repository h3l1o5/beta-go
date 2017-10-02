import axios from 'axios'

import { SET_SELECTED_STATION } from './types'
import { beautifyDataTime } from '../utils/time'

const fetchAndSetSelectedStation = stationID => dispatch => {
  axios.get(`/api/station/${stationID}/info`).then(infoRes => {
    const { id, name, highway, direction, region } = infoRes.data
    axios
      .get(`/api/station/${stationID}/predictedData`)
      .then(predictedDataRes => {
        const { predictedData } = predictedDataRes.data
        const beatyfiedPredictedData = beautifyDataTime(predictedData)
        axios
          .get(`/api/station/${stationID}/realtimeData`)
          .then(realtimeDataRes => {
            const { realtimeData } = realtimeDataRes.data
            dispatch({
              type: SET_SELECTED_STATION,
              id,
              name,
              highway,
              direction,
              region,
              predictedData: beatyfiedPredictedData,
              realtimeData,
            })
          })
      })
  })
}

export { fetchAndSetSelectedStation }
