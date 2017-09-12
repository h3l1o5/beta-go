const express = require('express')

const chargeStations = require('./chargeStations')
const chargeStation = require('./chargeStation')

const router = express()

router.use('/chargeStations', chargeStations)
router.use('/chargeStation', chargeStation)

module.exports = router
