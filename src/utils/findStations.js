import _ from 'lodash'

import { secondToMinute } from '../utils/time'

const findPriorStations = (currentStation, stations) => {
  const priorStation = currentStation.prior
  const priorStationsWithTravelTime = []

  _.forEach(priorStation, target => {
    const priorStationWithTravelTime = _.find(
      stations,
      station => station.id === target.id
    )
    priorStationWithTravelTime.travelTime = secondToMinute(
      Math.round(target.travelTime)
    )
    priorStationsWithTravelTime.push(priorStationWithTravelTime)
  })

  return priorStationsWithTravelTime
}

const findNextStations = (currentStation, stations) => {
  const nextStation = currentStation.next
  const nextStationsWithTravelTime = []

  _.forEach(nextStation, target => {
    const nextStationWithTravelTime = _.find(
      stations,
      station => station.id === target.id
    )
    nextStationWithTravelTime.travelTime = secondToMinute(
      Math.round(target.travelTime)
    )
    nextStationsWithTravelTime.push(nextStationWithTravelTime)
  })

  return nextStationsWithTravelTime
}

export { findPriorStations, findNextStations }
