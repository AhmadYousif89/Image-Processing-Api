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
exports.mapOnImgs = exports.isImgExist = exports.getImage = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const control_1 = require("./control");
const mapOnImgs = () => __awaiter(void 0, void 0, void 0, function* () {
    // to retrieve image name without(.ext) from the original images folder.
    try {
        return (yield fs_1.promises.readdir(control_1.originalImgsPath)).map((image) => image.split(".")[0]);
    }
    catch (_a) {
        console.log("Image folder is empty!");
        return "";
    }
});
exports.mapOnImgs = mapOnImgs;
const isImgExist = (image) => __awaiter(void 0, void 0, void 0, function* () {
    // check if image exist or not.
    if (!image) {
        return [];
    }
    else
        return (yield mapOnImgs()).includes(image);
});
exports.isImgExist = isImgExist;
const getImage = (image) => __awaiter(void 0, void 0, void 0, function* () {
    // storing the route of some image in var and returning the value after accessing it.
    const imgPath = path_1.default.join(control_1.originalImgsPath, `${image}.jpg`);
    yield fs_1.promises.access(imgPath);
    return imgPath;
});
exports.getImage = getImage;
