import _ from 'lodash'

import { secondToMinute } from '../utils/time'

const findPriorStations = (selectedStation, stations) => {
  const currentStationInfo = _.find(stations, { id: selectedStation.id })
  const priorStationsID = currentStationInfo.prior
  const priorStations = []

  _.forEach(priorStationsID, priorStationID => {
    const stationWithTravelTime = _.find(stations, { id: priorStationID })
    const timeIndex = new Date(Date.now()).getHours()
    const travelTime = _.find(selectedStation.predictData[timeIndex].上一站, {
      id: priorStationID,
    }).travelTime
    stationWithTravelTime.travelTime = secondToMinute(travelTime)
    priorStations.push(stationWithTravelTime)
  })

  return priorStations
}

const findNextStations = (selectedStation, stations) => {
  const currentStationInfo = _.find(stations, { id: selectedStation.id })
  const nextStationsID = currentStationInfo.next
  const nextStations = []

  _.forEach(nextStationsID, nextStationID => {
    const stationWithTravelTime = _.find(stations, { id: nextStationID })
    const timeIndex = new Date(Date.now()).getHours()
    const travelTime = _.find(selectedStation.predictData[timeIndex].下一站, {
      id: nextStationID,
    }).travelTime
    stationWithTravelTime.travelTime = secondToMinute(travelTime)
    nextStations.push(stationWithTravelTime)
  })

  return nextStations
}

export { findPriorStations, findNextStations }
