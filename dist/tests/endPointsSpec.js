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
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const appEndPoint = (0, supertest_1.default)(__1.default);
describe("Testing our application end points:_ \n", () => {
    it("gets the home page endpoint with status code 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield appEndPoint.get("/");
        expect(response.statusCode).toEqual(200);
    }));
    it("should test the end point api/images with status code 200 ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield appEndPoint.get("/api/images");
        expect(response.statusCode).toEqual(200);
    }));
    it("should get /api/images?image=aerial_view with status code 200 ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield appEndPoint.get("/api/images?image=aerial_view");
        expect(response.statusCode).toEqual(200);
    }));
    it("should get /api/images?image=aerial_view&width=200&height=200 with status code 200 ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield appEndPoint.get("/api/images?image=aerial_view&width=200&height=200");
        expect(response.statusCode).toEqual(200);
    }));
});
