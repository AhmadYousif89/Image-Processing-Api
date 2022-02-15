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
exports.imageRoute = void 0;
const getImage_1 = require("./getImage");
const originals_1 = require("./originals");
const thumbnails_1 = require("./thumbnails");
const validate = (info) => __awaiter(void 0, void 0, void 0, function* () {
    if (!info.image && !info.width && !info.height) {
        return `<h2>Image API</h2>`;
    }
    if (!(yield (0, originals_1.isImgExist)(info.image))) {
        const availableImages = yield (0, originals_1.mapOnImgs)();
        return `Available images are :- [ ${availableImages} ]`;
    }
    if (!info.width && !info.height) {
        return null;
    }
    if (Number.isNaN(info.width) || info.width < 10) {
        return "Please provide a positive integer value [more than 10] for the 'width' !";
    }
    if (Number.isNaN(info.height) || info.height < 10) {
        return "Please provide a positive integer value [more than 10] for the 'height' !";
    }
    return null;
});
const imageRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // storing the requsted querys in variables.
    const image = req.query.image;
    // converting the width & height to numbers.
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    // check validations
    const userMsg = yield validate({ image: image, width: width, height: height });
    if (userMsg) {
        res.send(userMsg);
        return;
    }
    let result;
    if (!(yield (0, thumbnails_1.isThumbExist)({ image, width, height }))) {
        result = yield (0, thumbnails_1.createThumbnail)({ image: image, width: width, height: height });
        if (result) {
            res.send(result);
            return;
        }
    }
    result = yield (0, getImage_1.getImage)({ image: image, width: width, height: height });
    if (result) {
        res.sendFile(result);
    }
    else
        res.send("opps :|");
});
exports.imageRoute = imageRoute;
