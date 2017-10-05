const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const Station = require('../models/Station')
const StationPredictedData = require('../models/StationPredictedData')
const StationRealtimeData = require('../models/StationRealtimeData')

const ensureStationsExisting = () => {
  Station.find({}, (err, stations) => {
    if (_.isEmpty(stations)) {
      const jsonData = JSON.parse(
        fs.readFileSync(
          path.join(
            __dirname,
            '../../../beta-go-data/output/stationsInfo.json'
          ),
          'utf8'
        )
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

const autoUpdatePredictedData = () => {
  let lastModifyTime = Date.now()

  function watchFile() {
    const filePath = path.join(
      __dirname,
      '../../../beta-go-data/output/stationsPredictedData.json'
    )
    fs.watch(filePath, event => {
      const now = Date.now()
      const timeGap = now - lastModifyTime
      if (event === 'change' && timeGap >= 5000) {
        lastModifyTime = now
        setTimeout(() => {
          const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

          _.forEach(jsonData, stationPredictedData => {
            StationPredictedData.findOne(
              { id: stationPredictedData.id },
              (err, station) => {
                const hourlyData = _.map(
                  stationPredictedData.predictedData,
                  hourlyData => ({
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
                  })
                )
                station.hourlyData = hourlyData
                station
                  .save()
                  .then(() => {})
                  .catch(err => console.error(err))
              }
            )
          })
          console.log('update stations predicted data')
        }, 5000)
      }
    })
  }
  watchFile()
}

const ensureStationsPredictedDataExisting = () => {
  StationPredictedData.find({}, (err, stationsPredictedData) => {
    if (_.isEmpty(stationsPredictedData)) {
      const jsonData = JSON.parse(
        fs.readFileSync(
          path.join(
            __dirname,
            '../../../beta-go-data/output/stationsPredictedData.json'
          ),
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
      console.log('migrate `StationsPredictedData.json` to db')
    }
    autoUpdatePredictedData()
  })
}

const autoUpdateRealtimeData = () => {
  let lastModifyTime = Date.now()

  const watchFile = () => {
    const filePath = path.join(
      __dirname,
      '../../../beta-go-data/output/stationsRealtimeData.json'
    )
    fs.watch(filePath, event => {
      const now = Date.now()
      const timeGap = now - lastModifyTime

      if (event === 'change' && timeGap >= 1000) {
        lastModifyTime = now
        setTimeout(() => {
          const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

          _.forEach(jsonData, stationRealtimeData => {
            StationRealtimeData.findOne(
              { id: stationRealtimeData.id },
              (err, station) => {
                station.WDSD = stationRealtimeData.WDSD
                station.TEMP = stationRealtimeData.TEMP
                station.CI = stationRealtimeData.CI
                station.WX = stationRealtimeData.WX
                station.wxIndex = stationRealtimeData.wxIndex
                station.POP = stationRealtimeData.POP
                station.rain = stationRealtimeData.rain
                station.event = stationRealtimeData.event

                station
                  .save()
                  .then(() => {})
                  .catch(err => console.error(err))
              }
            )
          })
          console.log('update stations realtime data')
        }, 1000)
      }
    })
  }
  watchFile()
}

const ensureStationsRealtimeDataExisting = () => {
  StationRealtimeData.find({}, (err, stationsRealtimeData) => {
    if (_.isEmpty(stationsRealtimeData)) {
      const jsonData = JSON.parse(
        fs.readFileSync(
          path.join(
            __dirname,
            '../../../beta-go-data/output/stationsRealtimeData.json'
          ),
          'utf8'
        )
      )

      _.forEach(jsonData, station => {
        const newStationRealtimeData = new StationRealtimeData(station)

        newStationRealtimeData
          .save()
          .then(() => {})
          .catch(err => console.log(err))
      })
      console.log('migrate `StationsRealtimeData.json` to db')
    }
  })
  autoUpdateRealtimeData()
}

module.exports = {
  ensureStationsExisting,
  ensureStationsPredictedDataExisting,
  ensureStationsRealtimeDataExisting,
}
