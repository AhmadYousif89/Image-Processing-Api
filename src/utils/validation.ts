import express from "express";
import { getImage } from "./getImage";
import { ImageParams } from "./control";
import { isImgExist, mapOnImgs } from "./originals";
import { createThumbnail, isThumbExist } from "./thumbnails";

const validate = async (info: ImageParams): Promise<string | null> => {
  if (!info.image && !info.width && !info.height) {
    return `<h2>Image API</h2>`;
  }
  if (!(await isImgExist(info.image))) {
    const availableImages = await mapOnImgs();
    return `Available images are :- [ ${availableImages} ]`;
  }
  if (!info.width && !info.height) {
    return null;
  }
  if (Number.isNaN(info.width) || info.width < 10) {
    return "Please provide a positive integer value [more than 10] for the 'width' !";
  }
  if (Number.isNaN(info.height) || info.height < 10) {
    return "Please provide a positive integer value [more than 10] for the 'height' !";
  }
  return null;
};

export const imageRoute = async (req: express.Request, res: express.Response): Promise<void> => {
  // storing the requsted querys in variables.
  const image = req.query.image as string;
  // converting the width & height to numbers.
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  // check validations
  const userMsg = await validate({ image: image, width: width, height: height });
  if (userMsg) {
    res.send(userMsg);
    return;
  }

  let result: null | string;
  if (!(await isThumbExist({ image, width, height }))) {
    result = await createThumbnail({ image: image, width: width, height: height });
    if (result) {
      res.send(result);
      return;
    }
  }
  // sending the image.
  result = await getImage({ image: image, width: width, height: height });
  if (result) {
    res.sendFile(result);
  } else res.send("opps :|");
};
