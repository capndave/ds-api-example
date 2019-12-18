const envFound = require('dotenv').config()

exports.config = {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PWD,
    server: process.env.MSSQL_SERVER,
    database: process.env.MSSQL_DB,
    domain: process.env.MSSQL_DOMAIN,
    // options: {
    //   instanceName: process.env.MSSQL_INSTANCE
    // },
    port: parseInt(process.env.MSSQL_PORT),
    pool: {
      max: 100
    },
    connectionTimeout: 30000
  }