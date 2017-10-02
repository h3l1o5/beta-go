const router = require('express').Router()
const _ = require('lodash')

const Station = require('../../models/Station')
const StationPredictedData = require('../../models/StationPredictedData')
const StationRealtimeData = require('../../models/StationRealtimeData')

router.get('/:stationID/info', (req, res, next) => {
  const stationID = req.params.stationID
  Station.findOne({ id: stationID }, (err, station) => {
    if (err) {
      return next(err)
    }
    res.json(station)
  })
})

router.get('/:stationID/predictedData', (req, res, next) => {
  const stationID = req.params.stationID
  StationPredictedData.findOne({ id: stationID }, (err, stationData) => {
    if (err) {
      return next(err)
    }
    const start = new Date(Date.now()).getHours()
    const end = start + 24
    const trimedHourlyData = stationData.hourlyData.slice(start, end)
    res.json({ predictedData: trimedHourlyData })
  })
})

router.get('/:stationID/realtimeData', (req, res, next) => {
  const stationID = req.params.stationID
  StationRealtimeData.findOne({ id: stationID }, (err, stationData) => {
    if (err) {
      return next(err)
    }
    res.json({ realtimeData: stationData })
  })
})

module.exports = router
