const mongoose = require('mongoose')

const StationRealTimeDataSchema = mongoose.Schema({
  id: { type: String, required: true },
  WDSD: { type: Number, required: true },
  TEMP: { type: Number, required: true },
  CI: { type: String, required: true },
  WX: { type: String, required: true },
  wxIndex: { type: Number, required: true },
  POP: { type: Number, required: true },
  rain: { type: Number, required: true },
  event: [],
})

module.exports = mongoose.model(
  'StationRealtimeData',
  StationRealTimeDataSchema
)
