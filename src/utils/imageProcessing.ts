import path from "path";
import sharp from "sharp";
import { isImgExist } from "./originals";
import { ImageParams, originalImgsPath, thumbImgsPath } from "./control";

// using (Sharp) module to resize the desired image.
const imgResize = async (info: ImageParams): Promise<string | null> => {
  const originalImg = path.join(originalImgsPath, `${info.image}.jpg`);
  const thumbnailImg = path.join(thumbImgsPath, `${info.image}_${info.width}_${info.height}.png`);
  if (await isImgExist(info.image)) {
    await sharp(originalImg)
      .resize(info.width as number, info.height as number, { fit: "contain" })
      .toFormat("png")
      .png()
      .toFile(thumbnailImg);
    return null;
  } else return "Unable to process your image !";
};
export default imgResize;
