import express from "express";
import { routes } from "./routes";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

app.use("/", routes);
app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`<h1>Home Page</h1>`);
});

const port = 3000;
app.listen(port, () => console.log(`server running on port ${port}...\n`));

export default app;
