const express = require('express');
module.exports = function expressLoader(app) {
    // Headers //
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Request-Method', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        next();
    });
    // Facilitate body parsing //
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    // Return express app //
    return app;
};
//# sourceMappingURL=express.js.map