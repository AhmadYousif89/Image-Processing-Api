"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use("/", routes_1.routes);
app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1>`);
});
const port = 3000;
app.listen(port, () => console.log(`server running on port ${port}...\n`));
exports.default = app;
