import express from 'express'
import path from 'path'
import logger from 'morgan'

const app = express()

app.use(express.static(path.join(__dirname, '/../build/')))

app.use(logger('common'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build/index.html'))
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
