import path from "path";

interface ImageParams {
  image: string;
  width: number;
  height: number;
}

const originalImgsPath = path.join(__dirname, "../../public/images/original");
const thumbImgsPath = path.join(__dirname, "../../public/images/thumbs");

export { ImageParams, originalImgsPath, thumbImgsPath };
