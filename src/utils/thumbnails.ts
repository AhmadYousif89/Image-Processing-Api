import path from "path";
import imgResize from "./imageProcessing";
import { promises as fsPromises } from "fs";
import { thumbImgsPath, ImageParams } from "./control";

// to create the thumbnail folder.
const createThumbsFolder = async (): Promise<void> => {
  try {
    await fsPromises.access(thumbImgsPath);
  } catch {
    fsPromises.mkdir(thumbImgsPath);
  }
};
// to check if image exist in thumbnail folder.
const isThumbExist = async (info: ImageParams): Promise<boolean> => {
  try {
    const thumbFile = path.join(thumbImgsPath, `${info.image}_${info.width}_${info.height}.png`);
    await fsPromises.access(thumbFile);
    return true;
  } catch {
    return false;
  }
};
// making route to the images in the thumbnail folder using (path)
const createThumbnail = async (info: ImageParams): Promise<string | null> => {
  if (!info.image || !info.width || !info.height) return null;
  // creating the thumbnail folder before resizing.
  await createThumbsFolder();
  console.log("Thumbnail image created");
  return imgResize({ image: info.image, width: info.width, height: info.height });
};

export { createThumbnail, createThumbsFolder, isThumbExist };
