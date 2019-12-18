import express = require('express')
const sql = require('mssql')
const logger = require('./logger/logger')
const routes = require('./routes/routes')
const { connectionPool } = require('./database/connectionPool')
const loaders = require('./loaders/loaders')


async function startApp() {

  // Define process name for os, eg 'ps' or 'top' command //
  process.title = 'arbq-api'

  // Initialize Express //
  const app: express.Application = express()

  // Load environment and express settings
  loaders(app)

  // Map routes //
  app.use(
    '/',
    (req: any, res: any, next) => {
      req.cp = connectionPool // attach mssql connection pool to req
      next()
    },
    routes
  )

  // Listen //
  const port: string = process.env.PORT
  app.listen(port, function() {
    logger.info(`App listening on port ${port}`)
  })
}

startApp()