const router = require('express').Router()

const ChargeStation = require('../../models/ChargeStation')
const ChargeStationData = require('../../models/ChargeStationData')

router.get('/:stationID/info', (req, res, next) => {
  const stationID = req.params.stationID
  ChargeStation.findOne({ id: stationID }, (err, station) => {
    if (err) {
      return next(err)
    }

    res.json(station)
  })
})

module.exports = router
