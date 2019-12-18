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
// Set up SQL connection pool //
module.exports = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(config);
            let pool = yield sql.connect(config);
            return yield pool.connect();
        }
        catch (error) {
            logger.error(`Error creating connection pool in mssql.js [11]: ${error}`);
        }
    });
};
//# sourceMappingURL=database.js.map