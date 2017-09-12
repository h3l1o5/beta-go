const router = require('express').Router()
const _ = require('lodash')

const ChargeStation = require('../../models/ChargeStation')

router.get('/', (req, res, next) => {
  ChargeStation.find({ direction: 'S' }, (err, stations) => {
    if (err) {
      return next(err)
    }

    const cleanerStations = _.map(stations, station => ({
      id: station.id,
      name: station.name,
      highway: station.highway,
      direction: station.direction,
      region: station.region,
      location: station.location,
      data: station.data,
    }))
    res.json({ stations: cleanerStations })
  })
})

router.get('/:highway/:direction', (req, res, next) => {
  const highway = req.params.highway
  const direction = req.params.direction

  ChargeStation.find({ highway, direction }, (err, stations) => {
    if (err) {
      return next(err)
    }

    res.json({ stations })
  })
})

module.exports = router
