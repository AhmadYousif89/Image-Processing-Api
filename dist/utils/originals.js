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
exports.mapOnImgs = exports.isImgExist = void 0;
const fs_1 = require("fs");
const control_1 = require("./control");
const mapOnImgs = () => __awaiter(void 0, void 0, void 0, function* () {
    // to retrieve image name without(.ext) from the original images folder.
    try {
        return (yield fs_1.promises.readdir(control_1.originalImgsPath)).map((image) => image.split(".")[0]);
    }
    catch (_a) {
        return "Image folder is empty or doesn't exist !";
    }
});
exports.mapOnImgs = mapOnImgs;
const isImgExist = (image) => __awaiter(void 0, void 0, void 0, function* () {
    // check if image exist or not.
    if (!image) {
        return false;
    }
    else
        return (yield mapOnImgs()).includes(image);
});
exports.isImgExist = isImgExist;
