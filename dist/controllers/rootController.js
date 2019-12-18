const fs = require('fs');
const path = require('path');
const logger = require('../logger/logger');
module.exports = function (req, res) {
    const pathToHtml = path.join(__dirname, '../pages/root.html');
    fs.readFile(pathToHtml, (err, data) => {
        if (err)
            logger.error(`Error reading html file in rootController[8]: ${e}`);
        res.write(data);
        res.end();
    });
};
//# sourceMappingURL=rootController.js.map