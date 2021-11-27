import express from "express";
import Connection from "./connection/db.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`server is running successfully on ${PORT}`);
});

Connection(username, password);
