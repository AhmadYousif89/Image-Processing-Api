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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThumbsFolder = exports.getThumbImg = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const control_1 = require("./control");
// to create the thumbnail folder.
const createThumbsFolder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.access(control_1.thumbImgsPath);
    }
    catch (_a) {
        fs_1.promises.mkdir(control_1.thumbImgsPath);
    }
});
exports.createThumbsFolder = createThumbsFolder;
// making route to the images in the thumbnail folder using (path)
const getThumbImg = (image, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const thumbnailFile = path_1.default.join(control_1.thumbImgsPath, `${image}_${width}_${height}.png`);
    return thumbnailFile;
});
exports.getThumbImg = getThumbImg;
