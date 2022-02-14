import path from "path";
import sharp from "sharp";
import { ImageParams, originalImgsPath } from "./control";
import { isImgExist } from "./originalImgs";

// using (Sharp) module to resize the desired image.
const imgResize = async (info: ImageParams): Promise<Buffer | string[]> => {
  const originalImage = path.join(originalImgsPath, `${info.image}.jpg`);
  if (await isImgExist(info.image)) {
    const image = await sharp(originalImage)
      .resize(info.width as number, info.height as number, { fit: "contain" })
      .png()
      .toBuffer();
    return image;
  } else return [];
};
export default imgResize;
