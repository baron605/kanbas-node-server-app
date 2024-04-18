import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
Lab5(app);
Hello(app);
app.listen(4000)
