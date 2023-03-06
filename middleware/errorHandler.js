const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {


    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "validation failed", massage: err.massage, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "not found", massage: err.massage, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "unauthorized", massage: err.massage, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "forbidden", massage: err.massage, stackTrace: err.stack });
            break;
        case constants.SERVER:
            res.json({ title: "server error", massage: err.massage, stackTrace: err.stack });
            break;
        default:
            console.log("no errors server is good !!")
            break;
    }
};

module.exports = errorHandler;