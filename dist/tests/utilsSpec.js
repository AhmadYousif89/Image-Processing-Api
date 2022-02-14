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
const imageProcessing_1 = __importDefault(require("../utils/imageProcessing"));
const originalImgs_1 = require("../utils/originalImgs");
const thumbsImgs_1 = require("../utils/thumbsImgs");
describe("Test the functionality of sharp module: \n", () => {
    it("should successfuly generate new image ", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "galaxy", width: 200, height: 200 })).toBeResolved();
    }));
    it("should return error (Input file is missing)", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "", width: 200, height: 200 })).toBeRejectedWithError(Error, "Input file is missing");
    }));
    it("should reject the operation", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageProcessing_1.default)({ image: "", width: 0, height: 0 })).toBeRejected();
    }));
});
describe("Testing the Utilities function: \n", () => {
    it("should return image name (galaxy)", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, originalImgs_1.getImage)("galaxy");
        expect(result).toContain("galaxy");
    }));
    it("should return image name (galaxy) inside original images folder", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, originalImgs_1.mapOnImgs)();
        expect(result).toContain("galaxy");
    }));
    it("should return the resized image of (aerial_view_200_200.png) from inside thumbs images folder", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, thumbsImgs_1.getThumbImg)("aerial_view", 200, 200);
        expect(result).not.toContain("galaxy_200_200.png");
    }));
});
