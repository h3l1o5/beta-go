const express = require('express')

const dbConfig = require('./config/db')
const serverConfig = require('./config/server')
const middlewareConfig = require('./config/middleware')

/**
 * database
 */
dbConfig()

/**
 * express and middleware
 */
const app = express()
middlewareConfig(app)

/**
 * server
 */
const server = serverConfig(app)

/**
 * start server
 */
const port = process.env.PORT || 3001
server.listen(port, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`server running on port ${port}`)
  }
})
