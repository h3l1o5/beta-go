const router = require('express').Router()
const _ = require('lodash')

const Station = require('../../models/Station')
const StationData = require('../../models/StationData')

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
  StationData.findOne({ id: stationID }, (err, stationData) => {
    if (err) {
      return next(err)
    }
    const start = new Date(Date.now()).getHours()
    const end = start + 24
    const trimedData = stationData.predictData.slice(start, end)
    const trimedStationData = {
      id: stationData.id,
      predictData: trimedData,
    }
    res.json(trimedStationData)
  })
})

module.exports = router
