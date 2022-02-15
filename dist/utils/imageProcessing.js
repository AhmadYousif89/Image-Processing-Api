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
const originals_1 = require("./originals");
const control_1 = require("./control");
// using (Sharp) module to resize the desired image.
const imgResize = (info) => __awaiter(void 0, void 0, void 0, function* () {
    const originalImg = path_1.default.join(control_1.originalImgsPath, `${info.image}.jpg`);
    const thumbnailImg = path_1.default.join(control_1.thumbImgsPath, `${info.image}_${info.width}_${info.height}.png`);
    if (yield (0, originals_1.isImgExist)(info.image)) {
        yield (0, sharp_1.default)(originalImg)
            .resize(info.width, info.height, { fit: "contain" })
            .toFormat("png")
            .png()
            .toFile(thumbnailImg);
        return null;
    }
    else
        return "Unable to process your image !";
});
exports.default = imgResize;
// imgResize({ image: "galaxy", width: -200, height: 200 }).then((data) => console.log(data));
