const express = require('express')
const sql = require('mssql')
const settings = require('./settings/settings.js')
const logger = require('./logger/logger')
const restRoutes = require('./routes/routes')
const { connectionPool } = require('./database/connectionPool')

// Initialize Express //
var app = express()

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'arbq-api'

// Headers //
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Request-Method', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  next()
})

// Get REST route functions //
app.use(
  '/',
  (req, res, next) => {
    req.cp = connectionPool // pass connection pool
    next()
  },
  restRoutes
)

// Allows you to parse body //
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Root route //
app.get('/', (req, res) => {
  res.send(
    '<h1>TCAD ARBQ formal-server</h1><p>Try adding another keyword to your path. Like /appraisers,  perhaps</p>'
  )
})

const port = process.env.PORT
app.listen(port, function() {
  logger.info(`\nApp listening on port ${port}`)
})

/* Export to use in testing */
module.exports = {
  app // to test in isolation
}
