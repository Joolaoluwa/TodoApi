import express from "express";
import dotenv from "dotenv/config";
import router from "./Routes/todoRoute.js";
import cors from "cors";

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/", router);

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Now live at ");
  console.log("Access the live documentation at");
});
