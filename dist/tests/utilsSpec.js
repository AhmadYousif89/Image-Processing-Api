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
const getImage_1 = require("../utils/getImage");
const imageProcessing_1 = __importDefault(require("../utils/imageProcessing"));
const originals_1 = require("../utils/originals");
const thumbnails_1 = require("../utils/thumbnails");
describe("Test the functionality of sharp module: \n", () => {
    it("should successfuly generate new image ", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "galaxy", width: 200, height: 200 })).toBeResolved();
    }));
    it("should return error msg (Unable to process your image !)", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "", width: 200, height: 200 })).toBeResolvedTo("Unable to process your image !");
    }));
    it("should return error msg (Unable to process your image !)", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "", width: -55, height: -55 })).toBeResolvedTo(
        // "Expected positive integer for width but received -200 of type number"
        "Unable to process your image !");
    }));
    it("should return error msg (Expected positive integer for width but received -55 of type number)", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "galaxy", width: -55, height: 55 })).toBeRejectedWithError(Error, "Expected positive integer for width but received -55 of type number");
    }));
    it("should return error msg (Expected positive integer for height but received -55 of type number)", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "galaxy", width: 55, height: -55 })).toBeRejectedWithError(Error, "Expected positive integer for height but received -55 of type number");
    }));
});
describe("Testing the Utilities function: \n", () => {
    it("should return image name (galaxy)", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, getImage_1.getImage)({ image: "galaxy", width: 200, height: 200 });
        expect(result).toContain("galaxy");
    }));
    it("should return image name (galaxy) inside original images folder", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, originals_1.mapOnImgs)();
        expect(result).toContain("galaxy");
    }));
    it("should return the resized image of (aerial_view_200_200.png) from inside thumbs images folder", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, thumbnails_1.createThumbnail)({ image: "aerial_view", width: 200, height: 200 });
        expect(result).not.toContain("galaxy_200_200.png");
    }));
});
