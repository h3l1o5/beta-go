const mongoose = require('mongoose')

const travelDataSchema = mongoose.Schema({
  fromID: { type: String, require: true },
  toID: { type: String, require: true },
  data: [
    {
      weekday: { type: String, require: true },
      date: { type: Date, require: true },
      time: { type: String, require: true },
      travelTime: { type: Number, require: true },
      speed: { type: Number, require: true },
    },
  ],
})

module.exports = mongoose.model('TravelData', travelDataSchema)
