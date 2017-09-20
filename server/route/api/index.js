const express = require('express')

const stations = require('./stations')
const station = require('./station')
const travel = require('./travel')

const router = express()

router.use('/stations', stations)
router.use('/station', station)
router.use('/travel', travel)

module.exports = router
