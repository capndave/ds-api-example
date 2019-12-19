import express = require('express')
const logger = require('./logger/logger')
const routes = require('./routes/routes')
const loaders = require('./loaders/loaders')
const database = require('./database/database')

async function startApp() {

  // Define process name for os, eg 'ps' or 'top' command
  process.title = 'arbq-api'

  // Initialize Express
  const app: express.Application = express()

  // Load environment and express settings
  loaders(app)
  
  // Connect to database
  const pool = await database()

  // Add connection to app as property
  app.locals.pool = pool

  // Map routes
  app.use('/', routes)

  // Listen
  const port: string = process.env.PORT
  app.listen(port, function() {
    logger.info(`App listening on port ${port}`)
  })
}

startApp()
