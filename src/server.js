import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
