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
exports.isThumbExist = exports.createThumbsFolder = exports.createThumbnail = void 0;
const path_1 = __importDefault(require("path"));
const imageProcessing_1 = __importDefault(require("./imageProcessing"));
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
// to check if image exist in thumbnail folder.
const isThumbExist = (info) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thumbFile = path_1.default.join(control_1.thumbImgsPath, `${info.image}_${info.width}_${info.height}.png`);
        yield fs_1.promises.access(thumbFile);
        return true;
    }
    catch (_b) {
        return false;
    }
});
exports.isThumbExist = isThumbExist;
// making route to the images in the thumbnail folder using (path)
const createThumbnail = (info) => __awaiter(void 0, void 0, void 0, function* () {
    if (!info.image || !info.width || !info.height)
        return null;
    // creating the thumbnail folder before resizing.
    yield createThumbsFolder();
    console.log("Thumbnail image created");
    return (0, imageProcessing_1.default)({ image: info.image, width: info.width, height: info.height });
});
exports.createThumbnail = createThumbnail;
