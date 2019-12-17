exports.config = {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PWD,
    server: process.env.MSSQL_SERVER,
    database: process.env.MSSQL_DB,
    domain: process.env.MSSQL_DOMAIN,
    options: {
      instanceName: process.env.MSSQL_INSTANCE
    },
    port: 1433,
    pool: {
      max: 100
    },
    connectionTimeout: 30000
  }