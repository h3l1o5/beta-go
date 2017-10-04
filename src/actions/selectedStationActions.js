import axios from 'axios'

import { SET_SELECTED_STATION, SET_IS_LOADING } from './types'
import { beautifyDataTime } from '../utils/time'

const fetchAndSetSelectedStation = stationID => dispatch => {
  dispatch({
    type: SET_IS_LOADING,
    isLoading: true,
  })
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
            dispatch({
              type: SET_IS_LOADING,
              isLoading: false,
            })
          })
      })
  })
}

export { fetchAndSetSelectedStation }
