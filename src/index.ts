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
  await database.connect()

  // Map routes
  app.use('/', (req: any, res: express.Response, next) => {
      req.pool = database.get() // attach connection pool to request object
      next()
  }, routes)

  // Listen
  const port: string = process.env.PORT
  app.listen(port, function() {
    logger.info(`App listening on port ${port}`)
  })
}

startApp()
