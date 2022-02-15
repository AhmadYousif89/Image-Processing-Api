import { promises as fsPromises } from "fs";
import { originalImgsPath } from "./control";

const mapOnImgs = async (): Promise<string[] | string> => {
  // to retrieve image name without(.ext) from the original images folder.
  try {
    return (await fsPromises.readdir(originalImgsPath)).map(
      (image: string): string => image.split(".")[0]
    );
  } catch {
    return "Image folder is empty or doesn't exist !";
  }
};
const isImgExist = async (image: string): Promise<boolean> => {
  // check if image exist or not.
  if (!image) {
    return false;
  } else return (await mapOnImgs()).includes(image);
};

export { isImgExist, mapOnImgs };
