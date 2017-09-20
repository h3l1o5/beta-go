import _ from 'lodash'

const findPriorStations = (currentStation, stations) => {
  const priorStationIDs = currentStation.prior
  const priorStations = []

  _.forEach(priorStationIDs, neededStationID => {
    priorStations.push(
      _.find(stations, station => station.id === neededStationID)
    )
  })

  return priorStations
}

const findNextStations = (currentStation, stations) => {
  const nextStationIDs = currentStation.next
  const nextStations = []

  _.forEach(nextStationIDs, neededStationID => {
    nextStations.push(
      _.find(stations, station => station.id === neededStationID)
    )
  })

  return nextStations
}

export { findPriorStations, findNextStations }
