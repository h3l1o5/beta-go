const router = require('express').Router()

const TravelData = require('../../models/TravelData')

router.get('/:fromID/:toID/time', (req, res, next) => {
  const fromID = req.params.fromID
  const toID = req.params.toID
  TravelData.findOne({ fromID, toID }, (err, travelData) => {
    if (err) {
      return next(err)
    }

    const currentHour = new Date(Date.now()).getHours().toString()
    const travelTime = travelData.data[currentHour].travelTime
    res.json({ travelTime })
  })
})

module.exports = router
