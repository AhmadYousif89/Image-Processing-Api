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
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const control_1 = require("./control");
const originalImgs_1 = require("./originalImgs");
// using (Sharp) module to resize the desired image.
const imgResize = (info) => __awaiter(void 0, void 0, void 0, function* () {
    const originalImage = path_1.default.join(control_1.originalImgsPath, `${info.image}.jpg`);
    if (yield (0, originalImgs_1.isImgExist)(info.image)) {
        const image = yield (0, sharp_1.default)(originalImage)
            .resize(info.width, info.height, { fit: "contain" })
            .png()
            .toBuffer();
        return image;
    }
    else
        return [];
});
exports.default = imgResize;
