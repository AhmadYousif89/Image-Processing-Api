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
exports.imageRoute = void 0;
const fs_1 = require("fs");
const imageProcessing_1 = __importDefault(require("./imageProcessing"));
const originalImgs_1 = require("./originalImgs");
const thumbsImgs_1 = require("./thumbsImgs");
const imageRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // storing the requsted querys in variables.
    const image = req.query.image;
    // converting the width & height to numbers.
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    // validating the query parameteres.
    if (!image && !width && !height) {
        res.send(`<h2>Image API</h2>`);
    }
    else if ((image && !width) || !height) {
        // will check if the requsted image exist or not.
        if (!(yield (0, originalImgs_1.isImgExist)(image))) {
            const availableImages = yield (0, originalImgs_1.mapOnImgs)();
            res.send(`Available images are :- [ ${availableImages} ].`);
        }
        else {
            // if image exist will display the original image.
            const imgPath = yield (0, originalImgs_1.getImage)(image);
            res.sendFile(imgPath);
        }
    }
    else if ((image && width) || (image && height)) {
        // checking for positive integers for the (width & height).
        if (width < 1) {
            res.send("Please provide a positive integer value for the 'width' !");
        }
        else if (height < 1) {
            res.send("Please provide a positive integer value for the 'height' !");
        }
        else {
            /*
            if all checks ok, we run these functions.
            1- create thumbnail folder.
            2- resize the requsted image and store it in a const as a buffer.
            3- write the buffer to the constracted path to thumbnail folder then send back the image.
            */
            yield (0, thumbsImgs_1.createThumbsFolder)();
            const resizedThumb = yield (0, imageProcessing_1.default)({ image: image, width: width, height: height });
            const thumbPath = yield (0, thumbsImgs_1.getThumbImg)(image, width, height);
            yield fs_1.promises.writeFile(thumbPath, resizedThumb);
            res.sendFile(thumbPath);
        }
    }
});
exports.imageRoute = imageRoute;
