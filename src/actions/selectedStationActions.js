import axios from 'axios'
import _ from 'lodash'

import { SET_SELECTED_STATION } from './types'
import { beautifyDataTime } from '../utils/time'

const fetchAndSetSelectedStation = stationID => dispatch => {
  axios.get(`/api/station/${stationID}/info`).then(infoRes => {
    const { id, name, highway, direction, region, prior, next } = infoRes.data
    axios.get(`/api/station/${stationID}/data`).then(dataRes => {
      const priorStationsWithTravelTime = []
      const nextStationsWithTravelTime = []
      Promise.all([
        ..._.map(prior, priorStationID =>
          axios
            .get(`/api/travel/${priorStationID}/${stationID}/time`)
            .then(res => {
              priorStationsWithTravelTime.push({
                id: priorStationID,
                travelTime: res.data.travelTime,
              })
            })
        ),
        ..._.map(next, nextStationID =>
          axios
            .get(`/api/travel/${stationID}/${nextStationID}/time`)
            .then(res => {
              nextStationsWithTravelTime.push({
                id: nextStationID,
                travelTime: res.data.travelTime,
              })
            })
        ),
      ]).then(() => {
        const { predictData } = dataRes.data
        const beatyfiedData = beautifyDataTime(predictData)
        dispatch({
          type: SET_SELECTED_STATION,
          id,
          name,
          highway,
          direction,
          region,
          prior: priorStationsWithTravelTime,
          next: nextStationsWithTravelTime,
          predictData: beatyfiedData,
        })
      })
    })
  })
}

export { fetchAndSetSelectedStation }
