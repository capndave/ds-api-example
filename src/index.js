const express = require('express')
const sql = require('mssql')
const settings = require('./settings/settings.js')
const logger = require('./logger/logger')
const routes = require('./routes/routes')
const { connectionPool } = require('./database/connectionPool')

// Get env vars from .env file //
require('dotenv').config()

// Initialize Express //
var app = express()

// Define process name for os, eg 'ps' or 'top' command //
process.title = 'arbq-api'

// Headers //
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Request-Method', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  next()
})

// Map routes //
app.use('/', (req, res, next) => {
    req.cp = connectionPool // attach mssql connection pool to req
    next()
}, routes)

// Facilitate body parsing //
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Listen //
const port = process.env.PORT
app.listen(port, function() {
  logger.info(`\nApp listening on port ${port}`)
})

// Export for testing //
module.exports = {
  app
}
