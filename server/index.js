import express from 'express'
import path from 'path'
import logger from 'morgan'
import mongoose from 'mongoose'

import { ensureStationsExisting } from './data/migrate'
import apiRoute from './route/api/index'

const app = express()

// db
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/beta-go', { useMongoClient: true })
ensureStationsExisting()

app.use(express.static(path.join(__dirname, '/../build/')))

app.use(logger('common'))

app.use('/api', apiRoute)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build/index.html'))
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
