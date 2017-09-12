const mongoose = require('mongoose')

const ChargeStationDataSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  data: [
    {
      weekday: { type: String, required: true },
      date: { type: String, required: true },
      time: { type: String, required: true },
      typeA: { type: Number, required: true },
      typeB: { type: Number, required: true },
      typeC: { type: Number, required: true },
      typeD: { type: Number, required: true },
      typeE: { type: Number, required: true },
    },
  ],
})

module.exports = mongoose.model('ChargeStationData', ChargeStationDataSchema)
