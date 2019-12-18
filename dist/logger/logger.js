'use strict';
const fs = require('fs');
const winston = require('winston');
const logDir = './logs/';
const date = new Date();
// Create log dir if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
module.exports = winston.createLogger({
    level: 'info',
    //   format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    format: winston.format.combine(
    // winston.format.label({label: '[my-label]'}),
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston.format.printf(info => `${info.timestamp} - ${info.level} - ${info.message}`)),
    transports: [
        // Output to console
        new winston.transports.Console({
            format: winston.format.simple(),
            colorize: true,
            level: 'info',
        }),
        // Output to file
        new winston.transports.File({
            filename: `${logDir}/${date.getMonth() + 1}_${date.getDate()}_${date.getFullYear()}.log`,
            level: 'debug',
            eol: '\n'
        }),
    ],
});
//# sourceMappingURL=logger.js.map