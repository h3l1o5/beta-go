const router = require('express').Router()
const _ = require('lodash')

const Station = require('../../models/Station')

router.get('/:highway/:direction', (req, res, next) => {
  const highway = req.params.highway
  const direction = req.params.direction

  Station.find({ highway, direction }, (err, stations) => {
    if (err) {
      return next(err)
    }

    res.json({ stations })
  })
})

module.exports = router
