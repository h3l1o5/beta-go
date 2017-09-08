import express from 'express'
import _ from 'lodash'

import ChargeStation from '../../models/ChargeStation'

const router = express.Router()

router.get('/', (req, res, next) => {
  ChargeStation.find({}, (err, stations) => {
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

export default router
