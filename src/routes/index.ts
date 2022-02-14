import { Router } from "express";
import images from "./pages/images";

export const routes = Router();

routes.use("/api/images", images);
