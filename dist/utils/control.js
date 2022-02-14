"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbImgsPath = exports.originalImgsPath = void 0;
const path_1 = __importDefault(require("path"));
const originalImgsPath = path_1.default.join(__dirname, "../../public/images/original");
exports.originalImgsPath = originalImgsPath;
const thumbImgsPath = path_1.default.join(__dirname, "../../public/images/thumbs");
exports.thumbImgsPath = thumbImgsPath;
