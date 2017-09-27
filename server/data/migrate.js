const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const Station = require('../models/Station')
const StationPredictedData = require('../models/StationPredictedData')

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

const ensureStationsPredictedDataExisting = () => {
  StationPredictedData.find({}, (err, stationsPredictedData) => {
    if (_.isEmpty(stationsPredictedData)) {
      const jsonData = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, 'stationsPredictedData.json'),
          'utf8'
        )
      )
      _.forEach(jsonData, station => {
        const hourlyData = _.map(station.predictedData, hourlyData => ({
          date: hourlyData.date,
          weekday: hourlyData.weekday,
          time: hourlyData.time,
          總車流量:
            hourlyData.flow.typeA +
            hourlyData.flow.typeB +
            hourlyData.flow.typeC +
            hourlyData.flow.typeD +
            hourlyData.flow.typeE,
          小客車: hourlyData.flow.typeA,
          小貨車: hourlyData.flow.typeB,
          大客車: hourlyData.flow.typeC,
          大貨車: hourlyData.flow.typeD,
          聯結車: hourlyData.flow.typeE,
          速度: hourlyData.speed,
          上一站: hourlyData.Prior,
          下一站: hourlyData.Next,
        }))

        const newStationPredictedData = new StationPredictedData({
          id: station.id,
          hourlyData,
        })
        newStationPredictedData
          .save()
          .then(() => {})
          .catch(err => console.log(err))
      })
      console.log('migrate `StationsData.json` to db')
    }
  })
}

module.exports = {
  ensureStationsExisting,
  ensureStationsPredictedDataExisting,
}
