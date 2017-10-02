const express = require('express')
const http = require('http')
const https = require('https')
const path = require('path')
const fs = require('fs')
const logger = require('morgan')
const mongoose = require('mongoose')

const {
  ensureStationsExisting,
  ensureStationsPredictedDataExisting,
  ensureStationsRealtimeDataExisting,
} = require('./data/migrate')
const apiRoute = require('./route/api/index')

const app = express()
const SERVER_CONFIG = {}
if (process.env.PROD) {
  SERVER_CONFIG.key = fs.readFileSync(
    path.join(__dirname, '/../../ssl/private.key')
  )
  SERVER_CONFIG.cert = fs.readFileSync(
    path.join(__dirname, '/../../ssl/certificate.crt')
  )
}

const server = process.env.PROD
  ? https.createServer(SERVER_CONFIG, app)
  : http.createServer(app)

// db
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/beta-go', { useMongoClient: true })
ensureStationsExisting()
ensureStationsPredictedDataExisting()
ensureStationsRealtimeDataExisting()

app.use(express.static(path.join(__dirname, '/../build/')))

app.use(logger('common'))

app.use('/api', apiRoute)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build/index.html'))
})

const port = process.env.PORT || 3001
server.listen(port, () => {
  console.log(`server running on port ${port}`)
})
