const router = require('express').Router()
const _ = require('lodash')

const Station = require('../../models/Station')

router.get('/:highway/:direction', (req, res, next) => {
  let highway = req.params.highway
  let direction = req.params.direction

  switch (highway) {
    case '1':
      highway = '國道1號'
      break
    case '3':
      highway = '國道3號'
      break
    case '5':
      highway = '國道5號'
      break
    default:
      break
  }

  direction = direction === 'N' ? '北上' : '南下'

  console.log(highway)
  console.log(direction)

  Station.find({ highway, direction }, (err, stations) => {
    if (err) {
      return next(err)
    }

    res.json({ stations })
  })
})

module.exports = router
