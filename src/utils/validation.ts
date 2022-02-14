import express from "express";
import { promises as fsPromises } from "fs";
import imgResize from "./imageProcessing";
import { getImage, isImgExist, mapOnImgs } from "./originalImgs";
import { createThumbsFolder, getThumbImg } from "./thumbsImgs";

export const imageRoute = async (req: express.Request, res: express.Response): Promise<void> => {
  // storing the requsted querys in variables.
  const image = req.query.image as string;
  // converting the width & height to numbers.
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  // validating the query parameteres.
  if (!image && !width && !height) {
    res.send(`<h2>Image API</h2>`);
  } else if ((image && !width) || !height) {
    // will check if the requsted image exist or not.
    if (!(await isImgExist(image))) {
      const availableImages = await mapOnImgs();
      res.send(`Available images are :- [ ${availableImages} ].`);
    } else {
      // if image exist will display the original image.
      const imgPath = await getImage(image);
      res.sendFile(imgPath);
    }
  } else if ((image && width) || (image && height)) {
    // checking for positive integers for the (width & height).
    if (width < 1) {
      res.send("Please provide a positive integer value for the 'width' !");
    } else if (height < 1) {
      res.send("Please provide a positive integer value for the 'height' !");
    } else {
      /* 
      if all checks ok, we run these functions.
      1- create thumbnail folder.
      2- resize the requsted image and store it in a const as a buffer.
      3- write the buffer to the constracted path to thumbnail folder then send back the image. 
      */
      await createThumbsFolder();
      const resizedThumb = await imgResize({ image: image, width: width, height: height });
      const thumbPath = await getThumbImg(image, width, height);
      await fsPromises.writeFile(thumbPath, resizedThumb);
      res.sendFile(thumbPath);
    }
  }
};
