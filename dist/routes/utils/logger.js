"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// custom middleware.
const logger = (req, res, next) => {
    const qValue = req.query;
    console.log("method:", qValue);
    next();
};
exports.default = logger;
