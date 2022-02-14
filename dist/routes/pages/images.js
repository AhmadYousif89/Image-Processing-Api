"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../../utils/validation");
const logger_1 = __importDefault(require("../utils/logger"));
const images = express_1.default.Router();
images.get("/", logger_1.default, validation_1.imageRoute);
exports.default = images;
