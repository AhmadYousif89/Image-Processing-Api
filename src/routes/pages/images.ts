import express from "express";
import { imageRoute } from "../../utils/validation";
import logger from "../utils/logger";

const images = express.Router();

images.get("/", logger, imageRoute);

export default images;
