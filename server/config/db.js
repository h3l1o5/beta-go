const mongoose = require('mongoose')

const {
  ensureStationsExisting,
  ensureStationsPredictedDataExisting,
  ensureStationsRealtimeDataExisting,
} = require('./migrateData')

module.exports = () => {
  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://localhost:27017/beta-go', {
    useMongoClient: true,
  })
  ensureStationsExisting()
  ensureStationsPredictedDataExisting()
  ensureStationsRealtimeDataExisting()
}
