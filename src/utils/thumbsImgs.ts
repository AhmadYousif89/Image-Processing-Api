import path from "path";
import { promises as fsPromises } from "fs";
import { thumbImgsPath } from "./control";

// to create the thumbnail folder.
const createThumbsFolder = async (): Promise<void> => {
  try {
    await fsPromises.access(thumbImgsPath);
  } catch {
    fsPromises.mkdir(thumbImgsPath);
  }
};
// making route to the images in the thumbnail folder using (path)
const getThumbImg = async (image: string, width: number, height: number): Promise<string> => {
  const thumbnailFile = path.join(thumbImgsPath, `${image}_${width}_${height}.png`);
  return thumbnailFile;
};

export { getThumbImg, createThumbsFolder };
