'use strict'
import fs from 'fs'
import winston from 'winston'
const logDir = 'logs/'
const date = new Date()

// Create log dir if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

export default winston.createLogger({
  level: 'info',
  transports: [
    // Output to console
    new winston.transports.Console({
      format: winston.format.simple(),
      level: 'info',
    }),
    // Output to file
    new winston.transports.File({
      filename: `${logDir}/${date.getMonth() + 1}_${date.getDate()}_${date.getFullYear()}.log`,
      level: 'debug',
      eol: '\n'
    }),
  ],
})
