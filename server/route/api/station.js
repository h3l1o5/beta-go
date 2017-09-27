const router = require('express').Router()
const _ = require('lodash')

const Station = require('../../models/Station')
const StationPredictedData = require('../../models/StationPredictedData')

router.get('/:stationID/info', (req, res, next) => {
  const stationID = req.params.stationID
  Station.findOne({ id: stationID }, (err, station) => {
    if (err) {
      return next(err)
    }
    res.json(station)
  })
})

router.get('/:stationID/data', (req, res, next) => {
  const stationID = req.params.stationID
  StationPredictedData.findOne({ id: stationID }, (err, stationData) => {
    if (err) {
      return next(err)
    }
    const start = new Date(Date.now()).getHours()
    const end = start + 24
    const trimedHourlyData = stationData.hourlyData.slice(start, end)
    const trimedStationData = {
      id: stationData.id,
      predictData: trimedHourlyData,
    }
    res.json(trimedStationData)
  })
})

module.exports = router
