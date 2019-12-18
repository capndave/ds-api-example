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
const settings = require('../settings/settings');
const logger = require('../logger/logger');
// Set up SQL connection pool //
const connectionPool = new sql.ConnectionPool(settings.config);
const open = function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectionPool
            .connect()
            .then(dbInstance => {
            return dbInstance;
        })
            .catch(err => {
            throw new Error(`Error creating connection pool: #{err}`);
        });
    });
};
const close = function () {
    connectionPool.close();
};
module.exports = {
    connectionPool,
    open,
    close
};
//# sourceMappingURL=connectionPool.js.map