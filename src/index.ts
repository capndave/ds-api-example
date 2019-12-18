const express = require('express')
const sql = require('mssql')
const logger = require('./logger/logger')
const routes = require('./routes/routes')
const { connectionPool } = require('./database/connectionPool')
const loaders = require('./loaders/loaders')

// Get env vars from .env file //
require('dotenv').config()

// Define process name for os, eg 'ps' or 'top' command //
process.title = 'arbq-api'

async function startApp() {

  // Initialize Express //
  const app = express()

  // Load environment and express settings
  loaders(app)

  // Map routes //
  app.use(
    '/',
    (req, res, next) => {
      req.cp = connectionPool // attach mssql connection pool to req
      next()
    },
    routes
  )

  // Listen //
  const port = process.env.PORT
  app.listen(port, function() {
    logger.info(`\nApp listening on port ${port}`)
  })
}

startApp()