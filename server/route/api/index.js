const express = require('express')

const stations = require('./stations')
const station = require('./station')

const router = express()

router.use('/stations', stations)
router.use('/station', station)

module.exports = router
