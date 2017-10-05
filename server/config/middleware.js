const express = require('express')
const logger = require('morgan')
const path = require('path')

const apiRoute = require('../route/api/index')

module.exports = app => {
  app.use(express.static(path.join(__dirname, '/../../build/')))
  app.use(logger(process.env.NODE_ENV === 'production' ? 'common' : 'dev'))
  app.use('/api', apiRoute)

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../../build/index.html'))
  })
  app.get('*', (req, res) => {
    res.redirect('/')
  })
}
