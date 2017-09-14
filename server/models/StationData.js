const mongoose = require('mongoose')

const stationDataSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  predictData: [
    {
      weekday: { type: String, required: true },
      date: { type: Date, required: true },
      time: { type: String, required: true },
      總車流量: { type: Number, required: true },
      小客車: { type: Number, required: true },
      小貨車: { type: Number, required: true },
      大客車: { type: Number, required: true },
      大貨車: { type: Number, required: true },
      聯結車: { type: Number, required: true },
    },
  ],
})

module.exports = mongoose.model('StationData', stationDataSchema)
