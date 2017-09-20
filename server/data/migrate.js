const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const Station = require('../models/Station')
const StationData = require('../models/StationData')
const TravelData = require('../models/TravelData')

const ensureStationsExisting = () => {
  Station.find({}, (err, stations) => {
    if (_.isEmpty(stations)) {
      const jsonData = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'stationsInfo.json'), 'utf8')
      )
      _.forEach(jsonData, station => {
        const newStation = new Station({
          id: station.id,
          name: station.name,
          highway: station.highway,
          direction: station.direction,
          location: station.location,
          region: station.region,
          prior: station.Prior,
          next: station.Next,
        })
        newStation
          .save()
          .then(() => {})
          .catch(err => console.log(err))
      })
      console.log('migrate `Stations.json` to db')
    }
  })
}

const ensureStationsPredictDataExisting = () => {
  StationData.find({}, (err, stationsData) => {
    if (_.isEmpty(stationsData)) {
      const jsonData = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, 'stationsPredictData.json'),
          'utf8'
        )
      )
      _.forEach(jsonData, stationData => {
        const temp = _.map(stationData.data, hourlyData => ({
          weekday: hourlyData.weekday,
          date: new Date(hourlyData.date),
          time: hourlyData.time,
          總車流量:
            Number.parseInt(hourlyData.typeA, 10) +
            Number.parseInt(hourlyData.typeB, 10) +
            Number.parseInt(hourlyData.typeC, 10) +
            Number.parseInt(hourlyData.typeD, 10) +
            Number.parseInt(hourlyData.typeE, 10),
          小客車: Number.parseInt(hourlyData.typeA, 10),
          小貨車: Number.parseInt(hourlyData.typeB, 10),
          大客車: Number.parseInt(hourlyData.typeC, 10),
          大貨車: Number.parseInt(hourlyData.typeD, 10),
          聯結車: Number.parseInt(hourlyData.typeE, 10),
        }))
        const newStationData = new StationData({
          id: stationData.id,
          predictData: temp,
        })
        newStationData
          .save()
          .then(() => {})
          .catch(err => console.log(err))
      })
      console.log('migrate `StationsData.json` to db')
    }
  })
}

const ensureTravelDataExisting = () => {
  TravelData.find({}, (err, travelsdata) => {
    if (_.isEmpty(travelsdata)) {
      const jsonData = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'travelsPredictData.json'), 'utf8')
      )
      _.forEach(jsonData, travelData => {
        const newTravelData = new TravelData({
          fromID: travelData.from,
          toID: travelData.to,
          data: travelData.data,
        })

        newTravelData
          .save()
          .then(() => {})
          .catch(err => console.log(err))
      })
      console.log('migrate `TravelsData.json` to db')
    }
  })
}

module.exports = {
  ensureStationsExisting,
  ensureStationsPredictDataExisting,
  ensureTravelDataExisting,
}
