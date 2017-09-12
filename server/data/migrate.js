const ChargeStation = require('../models/ChargeStation')
const ChargeStationData = require('../models/ChargeStationData')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const ensureStationsExisting = () => {
  ChargeStation.find({}, (err, stations) => {
    if (_.isEmpty(stations)) {
      const jsonData = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'chargeStations.json'), 'utf8')
      )
      _.forEach(jsonData, station => {
        const newStation = new ChargeStation({
          id: station.id,
          name: station.name,
          highway: `${station.highway}`,
          direction: station.direction,
          location: station.location,
          region: station.region,
        })
        newStation
          .save()
          .then(() => {})
          .catch(err => console.log(err))
      })
      console.log('migrate `chargeStations.json` to db')
    }
  })
}

const ensureStationsDataExisting = () => {
  ChargeStationData.find({}, (err, stationsData) => {
    if (_.isEmpty(stationsData)) {
      const jsonData = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'chargeStationsData.json'), 'utf8')
      )
      _.forEach(jsonData, stationData => {
        const newStationData = new ChargeStationData({
          id: stationData.id,
          data: stationData.data,
        })
        newStationData
          .save()
          .then(() => {})
          .catch(err => console.log(err))
      })
      console.log('migrate `chargeStationsData.json` to db')
    }
  })
}

module.exports = { ensureStationsExisting, ensureStationsDataExisting }
