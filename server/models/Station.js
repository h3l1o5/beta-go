const mongoose = require('mongoose')

const stationSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  highway: { type: String, required: true },
  direction: { type: String, required: true },
  region: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  prior: [{ type: String }],
  next: [{ type: String }],
})

module.exports = mongoose.model('Station', stationSchema)
