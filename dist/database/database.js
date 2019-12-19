var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sql = require('mssql');
const { config } = require('../settings/settings');
const logger = require('../logger/logger');
let connection;
module.exports = {
    /**
     *  Set up SQL connection pool
     *  @function
     *  @returns { string } a string indicating
     */
    connect: function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                connection = yield sql.connect(config);
                logger.info('SQL connection established');
                return 'SQL connection established';
            }
            catch (error) {
                logger.error(`Error creating connection pool in mssql.js [15]: ${error}`);
            }
        });
    },
    /**
     * Get connection pool
     * @function
     * @returns { object } a sql connection pool
     */
    get: function () {
        return connection;
    }
};
//# sourceMappingURL=database.js.map