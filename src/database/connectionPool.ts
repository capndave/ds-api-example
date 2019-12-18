const sql = require('mssql')
const settings = require('../settings/settings')
const logger = require('../logger/logger')

// Set up SQL connection pool //
const connectionPool = new sql.ConnectionPool(settings.config)

const open = async function() {
  await connectionPool
    .connect()
    .then(dbInstance => {
      return dbInstance
    })
    .catch(err => {
      throw new Error(`Error creating connection pool: #{err}`)
    })
}

const close = function () {
  connectionPool.close() 
}

module.exports = {
  connectionPool,  
  open,
  close
}