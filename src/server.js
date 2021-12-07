import express from "express";
import cors from "cors";
import helmet from "helmet";

import connectMongo from "./utils/db.js";
import router from "./routers/router.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 5000;

// connectMongo((err) => {
//   if (err) {
//     return console.log(err);
//   }

app.listen(port, "0.0.0.0" || "localhost", () => {
  console.log(`server running on ${port}`);
});
// });
