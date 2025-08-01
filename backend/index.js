import express from "express";
import DbConnection from "./database/DbConnection.js";
import dotenv from "dotenv";
import router from "./router/AuthRouter.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
DbConnection();
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", router);
const Port = process.env.port || 5000;

app.listen(Port, () => {
  console.log(`The server port is ${Port}`);
});
