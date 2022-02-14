import path from "path";
import { promises as fsPromises } from "fs";
import { originalImgsPath } from "./control";

const mapOnImgs = async (): Promise<string[] | string> => {
  // to retrieve image name without(.ext) from the original images folder.
  try {
    return (await fsPromises.readdir(originalImgsPath)).map((image: string) => image.split(".")[0]);
  } catch {
    console.log("Image folder is empty!");
    return "";
  }
};
const isImgExist = async (image: string): Promise<boolean | string[]> => {
  // check if image exist or not.
  if (!image) {
    return [];
  } else return (await mapOnImgs()).includes(image);
};
const getImage = async (image: string): Promise<string> => {
  // storing the route of some image in var and returning the value after accessing it.
  const imgPath = path.join(originalImgsPath, `${image}.jpg`);
  await fsPromises.access(imgPath);
  return imgPath;
};

export { getImage, isImgExist, mapOnImgs };
