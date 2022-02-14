import express from "express";
// custom middleware.
const logger = (req: express.Request, res: express.Response, next: () => void): void => {
  const qValue = req.query;
  console.log("method:", qValue);
  next();
};

export default logger;
