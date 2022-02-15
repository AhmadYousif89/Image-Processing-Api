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
exports.getImage = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const control_1 = require("./control");
const getImage = (info) => __awaiter(void 0, void 0, void 0, function* () {
    if (!info.image)
        return null;
    // storing the route of the image in variable [either thumb or original] and returning the value after accessing it.
    const imgPath = info.width && info.height
        ? path_1.default.join(control_1.thumbImgsPath, `${info.image}_${info.width}_${info.height}.png`)
        : path_1.default.join(control_1.originalImgsPath, `${info.image}.jpg`);
    try {
        // if we have access to the image then return it.
        yield fs_1.promises.access(imgPath);
        console.log("Image fetched from: \n", imgPath);
        return imgPath;
    }
    catch (_a) {
        return null;
    }
});
exports.getImage = getImage;
