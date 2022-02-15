import path from "path";
import { promises as fsPromises } from "fs";
import { thumbImgsPath, originalImgsPath, ImageParams } from "./control";

export const getImage = async (info: ImageParams): Promise<string | null> => {
  if (!info.image) return null;
  // storing the route of the image in variable [either thumb or original] and returning the value after accessing it.
  const imgPath =
    info.width && info.height
      ? path.join(thumbImgsPath, `${info.image}_${info.width}_${info.height}.png`)
      : path.join(originalImgsPath, `${info.image}.jpg`);
  try {
    // if we have access to the image then return it.
    await fsPromises.access(imgPath);
    console.log("Image fetched from: \n", imgPath);
    return imgPath;
  } catch {
    return null;
  }
};
