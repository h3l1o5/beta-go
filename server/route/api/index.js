const express = require('express')

const chargeStation = require('./chargeStation')

const router = express()

router.use('/chargeStations', chargeStation)

module.exports = router
