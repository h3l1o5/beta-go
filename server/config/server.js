const http = require('http')
const https = require('https')
const path = require('path')
const fs = require('fs')

module.exports = app => {
  let server
  if (process.env.NODE_ENV === 'production') {
    const SERVER_CONFIG = {
      key: fs.readFileSync(path.join(__dirname, '/../../../ssl/private.key')),
      cert: fs.readFileSync(
        path.join(__dirname, '/../../../ssl/certificate.crt')
      ),
    }
    server = https.createServer(SERVER_CONFIG, app)
  } else {
    server = http.createServer(app)
  }

  return server
}
