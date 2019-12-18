var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const sql = require('mssql');
const logger = require('./logger');
const routes = require('./routes');
const { connectionPool } = require('./database/connectionPool');
const loaders = require('./loaders');
// Get env vars from .env file //
require('dotenv').config();
// Define process name for os, eg 'ps' or 'top' command //
process.title = 'arbq-api';
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialize Express //
        const app = express();
        yield loaders(app);
        // Map routes //
        app.use('/', (req, res, next) => {
            req.cp = connectionPool; // attach mssql connection pool to req
            next();
        }, routes);
        // Listen //
        const port = process.env.PORT;
        app.listen(port, function () {
            logger.info(`\nApp listening on port ${port}`);
        });
    });
}
startApp();
//# sourceMappingURL=index.js.map