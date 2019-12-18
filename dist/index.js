"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const sql = require('mssql');
const logger = require('./logger/logger');
const routes = require('./routes/routes');
const { connectionPool } = require('./mssql');
const loaders = require('./loaders/loaders');
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        // Define process name for os, eg 'ps' or 'top' command //
        process.title = 'arbq-api';
        // Initialize Express //
        const app = express();
        // Load environment and express settings
        loaders(app);
        // Map routes //
        app.use('/', (req, res, next) => {
            req.cp = connectionPool; // attach mssql connection pool to req
            next();
        }, routes);
        // Listen //
        const port = process.env.PORT;
        app.listen(port, function () {
            logger.info(`App listening on port ${port}`);
        });
    });
}
startApp();
//# sourceMappingURL=index.js.map